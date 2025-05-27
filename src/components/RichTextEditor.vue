<template>
  <div>
    <!-- Block type selector applies to focused block -->
    <label>
      Block type:
      <select
        v-if="elements[focusedBlockIdx]"
        v-model="elements[focusedBlockIdx].type"
        style="margin-bottom: 8px"
      >
        <option value="p">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="pre">Preformatted</option>
      </select>
    </label>

    <!-- Inline formatting buttons -->
    <div style="margin-bottom: 8px">
      <button
        v-for="t in inlineTypes"
        :key="t"
        @click="appendInlineElement(t)"
        type="button"
      >
        {{ t }}
      </button>
    </div>

    <!-- The rich text editor area -->
    <div
      class="w-full min-h-24 p-4 rounded-base radius-2xl:rounded-2xl border border-base-300 dark:border-base-700 bg-white dark:bg-base-950 text-base-700 dark:text-base-300 hover:bg-base-50 dark:hover:bg-base-900 focus:bg-white dark:focus:bg-base-950 focus:border-primary-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 dark:focus:outline-primary-400 transition-colors resize-none"
    >
      <template
        v-for="(block, blockIdx) in elements"
        :key="block.id"
      >
        <component
          :is="block.type"
          class="cursor-text flex flex-wrap"
          @click="onBlockClick(blockIdx, $event)"
        >
          <template
            v-for="(child, childIdx) in block.children"
            :key="child.id"
          >
            <component
              :is="child.type"
              contenteditable
              spellcheck="false"
              :ref="setChildRef(blockIdx, childIdx)"
              :tabindex="0"
              :placeholder="'Type here...'"
              style="
                outline: none;
                min-width: 1ch;
                min-height: 1em;
                margin-right: 2px;
                display: inline-block;
              "
              @focus="setFocus(blockIdx, childIdx)"
              @keydown.enter.prevent="handleEnter(blockIdx, childIdx, $event)"
              @keydown.up.prevent="focusPrev(blockIdx, childIdx)"
              @keydown.down.prevent="focusNext(blockIdx, childIdx)"
              @keydown.backspace="handleBackspace(blockIdx, childIdx, $event)"
              @keydown.delete="handleDelete(blockIdx, childIdx, $event)"
              @keydown.left="handleLeftArrow(blockIdx, childIdx, $event)"
              @keydown.right="handleRightArrow(blockIdx, childIdx, $event)"
              @input="updateContent($event, blockIdx, childIdx)"
            />
          </template>
        </component>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  type InlineType = "span" | "b" | "i" | "em" | "strong";
  type BlockType = "p" | "h1" | "h2" | "h3" | "pre";

  interface InlineChild {
    id: string;
    type: InlineType;
    content: string;
  }

  interface BlockElement {
    id: string;
    type: BlockType;
    children: InlineChild[];
  }

  function uuid(): string {
    return crypto.randomUUID();
  }

  function createChild(content = "", type: InlineType = "span"): InlineChild {
    return { id: uuid(), type, content };
  }

  function createBlock(
    type: BlockType = "p",
    children: InlineChild[] = [createChild()],
  ): BlockElement {
    return { id: uuid(), type, children };
  }

  const inlineTypes: InlineType[] = ["span", "b", "i", "em", "strong"];
  const elements = ref<BlockElement[]>([createBlock()]);

  const childRefs: Ref<Array<Array<HTMLElement | null>>> = ref([]);

  function setChildRef(blockIdx: number, childIdx: number) {
    return (el: HTMLElement | null) => {
      if (!childRefs.value[blockIdx]) childRefs.value[blockIdx] = [];
      childRefs.value[blockIdx][childIdx] = el;
    };
  }

  const focusedBlockIdx = ref(0);
  const focusedChildIdx = ref(0);

  function setFocus(blockIdx: number, childIdx: number) {
    focusedBlockIdx.value = blockIdx;
    focusedChildIdx.value = childIdx;
  }

  function moveCaretToEnd(el: HTMLElement | null) {
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
  function moveCaretToStart(el: HTMLElement | null) {
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(true);
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  function updateContent(event: Event, blockIdx: number, childIdx: number) {
    const target = event.target as HTMLElement;
    elements.value[blockIdx].children[childIdx].content = target.innerText;
  }

  function focusPrev(blockIdx: number, childIdx: number) {
    if (childIdx > 0) {
      nextTick(() => {
        childRefs.value[blockIdx][childIdx - 1]?.focus();
        moveCaretToEnd(childRefs.value[blockIdx][childIdx - 1]);
        setFocus(blockIdx, childIdx - 1);
      });
    } else if (blockIdx > 0) {
      const prevBlock = elements.value[blockIdx - 1];
      const lastChildIdx = prevBlock.children.length - 1;
      nextTick(() => {
        childRefs.value[blockIdx - 1][lastChildIdx]?.focus();
        moveCaretToEnd(childRefs.value[blockIdx - 1][lastChildIdx]);
        setFocus(blockIdx - 1, lastChildIdx);
      });
    }
  }
  function focusNext(blockIdx: number, childIdx: number) {
    const currBlock = elements.value[blockIdx];
    if (childIdx < currBlock.children.length - 1) {
      nextTick(() => {
        childRefs.value[blockIdx][childIdx + 1]?.focus();
        moveCaretToStart(childRefs.value[blockIdx][childIdx + 1]);
        setFocus(blockIdx, childIdx + 1);
      });
    } else if (blockIdx < elements.value.length - 1) {
      nextTick(() => {
        childRefs.value[blockIdx + 1][0]?.focus();
        moveCaretToStart(childRefs.value[blockIdx + 1][0]);
        setFocus(blockIdx + 1, 0);
      });
    }
  }

  // ENTER: Create a new block below current, focus its first child
  function handleEnter(
    blockIdx: number,
    childIdx: number,
    event: KeyboardEvent,
  ) {
    event.preventDefault();
    const el = childRefs.value[blockIdx][childIdx];
    const selection = window.getSelection();
    let before = "",
      after = "";
    if (
      selection &&
      el &&
      selection.rangeCount > 0 &&
      el.contains(selection.getRangeAt(0).startContainer)
    ) {
      const range = selection.getRangeAt(0);
      const caretPos = range.startOffset;
      const node = range.startContainer;
      if (node.nodeType === Node.TEXT_NODE) {
        before = node.textContent?.slice(0, caretPos) ?? "";
        after = node.textContent?.slice(caretPos) ?? "";
      } else {
        before = el.innerText;
        after = "";
      }
    } else if (el) {
      before = el.innerText;
      after = "";
    }

    elements.value[blockIdx].children[childIdx].content = before;

    const afterChildren: InlineChild[] = [];
    if (after) {
      afterChildren.push(createChild(after));
    }
    for (
      let i = childIdx + 1;
      i < elements.value[blockIdx].children.length;
      i++
    ) {
      afterChildren.push({ ...elements.value[blockIdx].children[i] });
    }
    elements.value[blockIdx].children.splice(childIdx + 1);

    elements.value.splice(
      blockIdx + 1,
      0,
      createBlock(
        elements.value[blockIdx].type,
        afterChildren.length ? afterChildren : [createChild()],
      ),
    );

    nextTick(() => {
      childRefs.value[blockIdx + 1]?.[0]?.focus();
      setFocus(blockIdx + 1, 0);
      moveCaretToStart(childRefs.value[blockIdx + 1]?.[0] ?? null);
      if (after) {
        childRefs.value[blockIdx + 1][0]!.innerText = after;
      }
    });
  }

  // Backspace: merge or delete child/block
  function handleBackspace(
    blockIdx: number,
    childIdx: number,
    event: KeyboardEvent,
  ) {
    const el = childRefs.value[blockIdx][childIdx];
    const selection = window.getSelection();
    const isAtStart =
      selection &&
      selection.anchorOffset === 0 &&
      selection.anchorNode === el?.firstChild;

    // If empty, remove child (unless only one child in only one block)
    if (
      el &&
      el.innerText === "" &&
      (elements.value[blockIdx].children.length > 1 ||
        elements.value.length > 1)
    ) {
      event.preventDefault();
      elements.value[blockIdx].children.splice(childIdx, 1);
      // If block has no children, remove block
      if (elements.value[blockIdx].children.length === 0) {
        elements.value.splice(blockIdx, 1);
        nextTick(() => {
          const prevBlockIdx = Math.max(0, blockIdx - 1);
          const prevChildIdx = elements.value[prevBlockIdx].children.length - 1;
          childRefs.value[prevBlockIdx][prevChildIdx]?.focus();
          setFocus(prevBlockIdx, prevChildIdx);
          moveCaretToEnd(childRefs.value[prevBlockIdx][prevChildIdx]);
        });
      } else {
        nextTick(() => {
          const prevIdx = Math.max(0, childIdx - 1);
          childRefs.value[blockIdx][prevIdx]?.focus();
          setFocus(blockIdx, prevIdx);
          moveCaretToEnd(childRefs.value[blockIdx][prevIdx]);
        });
      }
      return;
    }

    // If caret at start and not first child, merge with previous child
    if (isAtStart && childIdx > 0) {
      event.preventDefault();
      const prev = elements.value[blockIdx].children[childIdx - 1];
      const curr = elements.value[blockIdx].children[childIdx];
      prev.content += curr.content;
      elements.value[blockIdx].children.splice(childIdx, 1);
      nextTick(() => {
        childRefs.value[blockIdx][childIdx - 1]!.innerText = prev.content;
        childRefs.value[blockIdx][childIdx - 1]?.focus();
        setFocus(blockIdx, childIdx - 1);
        moveCaretToEnd(childRefs.value[blockIdx][childIdx - 1]);
      });
      return;
    }

    // If caret at start and first child, merge with previous block's last child
    if (isAtStart && childIdx === 0 && blockIdx > 0) {
      event.preventDefault();
      const prevBlock = elements.value[blockIdx - 1];
      const prevChild = prevBlock.children[prevBlock.children.length - 1];
      const curr = elements.value[blockIdx].children[childIdx];
      prevChild.content += curr.content;
      elements.value[blockIdx].children.splice(childIdx, 1);
      // If block is empty, remove it
      if (elements.value[blockIdx].children.length === 0) {
        elements.value.splice(blockIdx, 1);
        nextTick(() => {
          childRefs.value[blockIdx - 1][
            prevBlock.children.length - 1
          ]!.innerText = prevChild.content;
          childRefs.value[blockIdx - 1][prevBlock.children.length - 1]?.focus();
          setFocus(blockIdx - 1, prevBlock.children.length - 1);
          moveCaretToEnd(
            childRefs.value[blockIdx - 1][prevBlock.children.length - 1],
          );
        });
      } else {
        nextTick(() => {
          childRefs.value[blockIdx - 1][
            prevBlock.children.length - 1
          ]!.innerText = prevChild.content;
          childRefs.value[blockIdx - 1][prevBlock.children.length - 1]?.focus();
          setFocus(blockIdx - 1, prevBlock.children.length - 1);
          moveCaretToEnd(
            childRefs.value[blockIdx - 1][prevBlock.children.length - 1],
          );
        });
      }
      return;
    }
  }

  // Delete: merge with next child/block, or with previous if at start
  function handleDelete(
    blockIdx: number,
    childIdx: number,
    event: KeyboardEvent,
  ) {
    const el = childRefs.value[blockIdx][childIdx];
    const selection = window.getSelection();

    // If caret at start, merge with previous sibling (NEW BEHAVIOR)
    const isAtStart =
      selection &&
      selection.anchorOffset === 0 &&
      selection.anchorNode === el?.firstChild;

    if (isAtStart) {
      // Same as Backspace at start
      if (childIdx > 0) {
        event.preventDefault();
        const prev = elements.value[blockIdx].children[childIdx - 1];
        const curr = elements.value[blockIdx].children[childIdx];
        prev.content += curr.content;
        elements.value[blockIdx].children.splice(childIdx, 1);
        nextTick(() => {
          childRefs.value[blockIdx][childIdx - 1]!.innerText = prev.content;
          childRefs.value[blockIdx][childIdx - 1]?.focus();
          setFocus(blockIdx, childIdx - 1);
          moveCaretToEnd(childRefs.value[blockIdx][childIdx - 1]);
        });
        return;
      }
      // If at start of first child, merge with previous block's last child
      if (childIdx === 0 && blockIdx > 0) {
        event.preventDefault();
        const prevBlock = elements.value[blockIdx - 1];
        const prevChild = prevBlock.children[prevBlock.children.length - 1];
        const curr = elements.value[blockIdx].children[childIdx];
        prevChild.content += curr.content;
        elements.value[blockIdx].children.splice(childIdx, 1);
        if (elements.value[blockIdx].children.length === 0) {
          elements.value.splice(blockIdx, 1);
          nextTick(() => {
            childRefs.value[blockIdx - 1][
              prevBlock.children.length - 1
            ]!.innerText = prevChild.content;
            childRefs.value[blockIdx - 1][
              prevBlock.children.length - 1
            ]?.focus();
            setFocus(blockIdx - 1, prevBlock.children.length - 1);
            moveCaretToEnd(
              childRefs.value[blockIdx - 1][prevBlock.children.length - 1],
            );
          });
        } else {
          nextTick(() => {
            childRefs.value[blockIdx - 1][
              prevBlock.children.length - 1
            ]!.innerText = prevChild.content;
            childRefs.value[blockIdx - 1][
              prevBlock.children.length - 1
            ]?.focus();
            setFocus(blockIdx - 1, prevBlock.children.length - 1);
            moveCaretToEnd(
              childRefs.value[blockIdx - 1][prevBlock.children.length - 1],
            );
          });
        }
        return;
      }
    }

    // --- Existing delete-at-end logic ---
    const isAtEnd = (() => {
      if (!selection || !el?.firstChild) return false;
      if (selection.anchorNode !== el.lastChild) return false;
      return selection.anchorOffset === el.innerText.length;
    })();

    // If empty, remove child (unless only one child in only one block)
    if (
      el &&
      el.innerText === "" &&
      (elements.value[blockIdx].children.length > 1 ||
        elements.value.length > 1)
    ) {
      event.preventDefault();
      elements.value[blockIdx].children.splice(childIdx, 1);
      if (elements.value[blockIdx].children.length === 0) {
        elements.value.splice(blockIdx, 1);
        nextTick(() => {
          const nextBlockIdx = Math.min(elements.value.length - 1, blockIdx);
          const nextChildIdx = 0;
          childRefs.value[nextBlockIdx][nextChildIdx]?.focus();
          setFocus(nextBlockIdx, nextChildIdx);
          moveCaretToStart(childRefs.value[nextBlockIdx][nextChildIdx]);
        });
      } else {
        nextTick(() => {
          const nextIdx = Math.min(
            childIdx,
            elements.value[blockIdx].children.length - 1,
          );
          childRefs.value[blockIdx][nextIdx]?.focus();
          setFocus(blockIdx, nextIdx);
          moveCaretToStart(childRefs.value[blockIdx][nextIdx]);
        });
      }
      return;
    }

    // If caret at end and not last child, merge with next child
    if (isAtEnd && childIdx < elements.value[blockIdx].children.length - 1) {
      event.preventDefault();
      const curr = elements.value[blockIdx].children[childIdx];
      const next = elements.value[blockIdx].children[childIdx + 1];
      curr.content += next.content;
      elements.value[blockIdx].children.splice(childIdx + 1, 1);
      nextTick(() => {
        childRefs.value[blockIdx][childIdx]!.innerText = curr.content;
        childRefs.value[blockIdx][childIdx]?.focus();
        setFocus(blockIdx, childIdx);
        moveCaretToEnd(childRefs.value[blockIdx][childIdx]);
      });
      return;
    }

    // If caret at end and last child, merge with next block's first child
    if (
      isAtEnd &&
      childIdx === elements.value[blockIdx].children.length - 1 &&
      blockIdx < elements.value.length - 1
    ) {
      event.preventDefault();
      const curr = elements.value[blockIdx].children[childIdx];
      const nextBlock = elements.value[blockIdx + 1];
      const nextChild = nextBlock.children[0];
      curr.content += nextChild.content;
      nextBlock.children.splice(0, 1);
      if (nextBlock.children.length === 0) {
        elements.value.splice(blockIdx + 1, 1);
      }
      nextTick(() => {
        childRefs.value[blockIdx][childIdx]!.innerText = curr.content;
        childRefs.value[blockIdx][childIdx]?.focus();
        setFocus(blockIdx, childIdx);
        moveCaretToEnd(childRefs.value[blockIdx][childIdx]);
      });
      return;
    }
  }

  function handleLeftArrow(
    blockIdx: number,
    childIdx: number,
    event: KeyboardEvent,
  ) {
    if (event.shiftKey) return; // Don't override selection
    const el = childRefs.value[blockIdx][childIdx];
    const selection = window.getSelection();
    const isAtStart =
      selection &&
      selection.anchorOffset === 0 &&
      selection.anchorNode === el?.firstChild;

    if (isAtStart) {
      if (childIdx > 0) {
        // Move to end of previous inline
        event.preventDefault();
        const prevEl = childRefs.value[blockIdx][childIdx - 1];
        nextTick(() => {
          prevEl?.focus();
          setFocus(blockIdx, childIdx - 1);
          moveCaretToEnd(prevEl);
        });
      } else if (blockIdx > 0) {
        // Move to end of previous block's last inline
        event.preventDefault();
        const prevBlock = elements.value[blockIdx - 1];
        const lastChildIdx = prevBlock.children.length - 1;
        const prevEl = childRefs.value[blockIdx - 1][lastChildIdx];
        nextTick(() => {
          prevEl?.focus();
          setFocus(blockIdx - 1, lastChildIdx);
          moveCaretToEnd(prevEl);
        });
      }
    }
  }

  function handleRightArrow(
    blockIdx: number,
    childIdx: number,
    event: KeyboardEvent,
  ) {
    if (event.shiftKey) return; // Don't override selection
    const el = childRefs.value[blockIdx][childIdx];
    const selection = window.getSelection();
    const isAtEnd =
      selection &&
      el &&
      selection.anchorNode === el.lastChild &&
      selection.anchorOffset === el.innerText.length;

    const currBlock = elements.value[blockIdx];
    if (isAtEnd) {
      if (childIdx < currBlock.children.length - 1) {
        // Move to start of next inline
        event.preventDefault();
        const nextEl = childRefs.value[blockIdx][childIdx + 1];
        nextTick(() => {
          nextEl?.focus();
          setFocus(blockIdx, childIdx + 1);
          moveCaretToStart(nextEl);
        });
      } else if (blockIdx < elements.value.length - 1) {
        // Move to start of next block's first inline
        event.preventDefault();
        const nextEl = childRefs.value[blockIdx + 1][0];
        nextTick(() => {
          nextEl?.focus();
          setFocus(blockIdx + 1, 0);
          moveCaretToStart(nextEl);
        });
      }
    }
  }

  // Append a new inline element after the current one
  function appendInlineElement(newType: InlineType) {
    const blockIdx = focusedBlockIdx.value;
    const childIdx = focusedChildIdx.value;
    if (elements.value[blockIdx]) {
      const newChild = createChild("", newType);
      elements.value[blockIdx].children.splice(childIdx + 1, 0, newChild);
      nextTick(() => {
        childRefs.value[blockIdx][childIdx + 1]?.focus();
        setFocus(blockIdx, childIdx + 1);
        moveCaretToStart(childRefs.value[blockIdx][childIdx + 1]);
      });
    }
  }

  function onBlockClick(blockIdx: number, event: MouseEvent) {
    // If the click is on the block itself, not on a child
    // (If you want to always focus last child on any click, remove this check)
    if (event.target !== event.currentTarget) return;

    const block = elements.value[blockIdx];
    if (!block || block.children.length === 0) return;
    const lastIdx = block.children.length - 1;
    nextTick(() => {
      const el = childRefs.value[blockIdx][lastIdx];
      if (el) {
        el.focus();
        setFocus(blockIdx, lastIdx);
        moveCaretToEnd(el);
      }
    });
  }
</script>

<style scoped>
  [contenteditable]:focus {
    border-color: #409eff;
  }
  button {
    margin-right: 4px;
  }
</style>
