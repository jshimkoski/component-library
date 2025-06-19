<template>
  <div>
    <!-- Block type selector -->
    <label>
      Block type:
      <select
        v-model="nextBlockType"
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
        @mousedown="applyInlineFormat(t, $event)"
        type="button"
        :title="`Format as ${t}`"
      >
        {{ t }}
      </button>
    </div>

    <!-- Editor -->
    <Prose>
      <div
        ref="editor"
        contenteditable="true"
        spellcheck="false"
        :class="`
          w-full min-h-24 p-4
          rounded-base
          radius-2xl:rounded-2xl
          border border-base-300 dark:border-base-700
          bg-white dark:bg-base-950
          text-base-700 dark:text-base-300
          hover:bg-base-50 dark:hover:bg-base-900
          focus:bg-white dark:focus:bg-base-950
          focus:border-primary-500
          focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 dark:focus:outline-primary-400
          transition-colors
          resize-none
        `"
        @keydown="onKeydown"
        @input="onInput"
      >
        <p><br /></p>
      </div>
    </Prose>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from "vue";
  import Prose from "./Prose.vue";

  const modelValue = defineModel({
    type: String,
    default: "",
  });

  type InlineType = "span" | "b" | "i" | "em" | "strong";
  type BlockType = "p" | "h1" | "h2" | "h3" | "pre";

  const inlineTypes: InlineType[] = ["span", "b", "i", "em", "strong"];
  const nextBlockType = ref<BlockType>("p");
  const editor = ref<HTMLDivElement | null>(null);

  // Test function to verify inline element behavior
  function testInlineElementBehavior() {
    console.log("Testing inline element behavior:");
    console.log("=".repeat(50));
    console.log("EXPECTED BEHAVIORS:");
    console.log(
      "1. Ctrl+B inside <b>bold</b> → creates <span> instead of nested <b>",
    );
    console.log(
      "2. Ctrl+I inside <i>italic</i> → creates <span> instead of nested <i>",
    );
    console.log(
      "3. Ctrl+B inside <i>italic</i> → creates <b> normally (different types)",
    );
    console.log("4. No nesting of same element types is allowed");
    console.log("=".repeat(50));

    // Test 1: Pressing Ctrl+B inside a <b> element should create a <span>
    const testContent = editor.value;
    if (testContent) {
      testContent.innerHTML = "<p>This is <b>bold text</b> content.</p>";

      // Simulate cursor position inside the bold element
      const boldElement = testContent.querySelector("b");
      if (boldElement && boldElement.firstChild) {
        const range = document.createRange();
        range.setStart(boldElement.firstChild, 2); // Position at "ld"
        range.collapse(true);

        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);

          // Test our findInlineParent function
          const parentInfo = findInlineParent(boldElement.firstChild, "b");
          console.log(
            "Test 1 - Found parent:",
            parentInfo.element?.tagName,
            "at offset:",
            parentInfo.offset,
          );

          // Should find the bold element and return span when applying same format
          const shouldUseSpan =
            parentInfo.element?.tagName.toLowerCase() === "b";
          console.log("Test 1 - Should use span instead of b:", shouldUseSpan);
          console.log("Test 1 - Expected: true (prevents <b> nesting)");
        }
      }

      // Test 2: Complex nested scenario - Ctrl+B inside <i><b>text</b></i>
      testContent.innerHTML =
        "<p>This is <i>italic <b>bold and italic</b> text</i>.</p>";
      const nestedBold = testContent.querySelector("i b");
      if (nestedBold && nestedBold.firstChild) {
        const range2 = document.createRange();
        range2.setStart(nestedBold.firstChild, 3); // Position at "d a"
        range2.collapse(true);

        const selection2 = window.getSelection();
        if (selection2) {
          selection2.removeAllRanges();
          selection2.addRange(range2);

          const parentInfo2 = findInlineParent(nestedBold.firstChild, "b");
          console.log(
            "Test 2 - Found parent in nested structure:",
            parentInfo2.element?.tagName,
            "at offset:",
            parentInfo2.offset,
          );

          const shouldUseSpan2 =
            parentInfo2.element?.tagName.toLowerCase() === "b";
          console.log("Test 2 - Should use span instead of b:", shouldUseSpan2);
          console.log(
            "Test 2 - Expected: true (prevents nested <b> even within <i>)",
          );
        }
      }

      // Test 3: Different tag types - Ctrl+I inside <b>text</b> should work normally
      testContent.innerHTML = "<p>This is <b>bold text</b> content.</p>";
      const boldForItalic = testContent.querySelector("b");
      if (boldForItalic && boldForItalic.firstChild) {
        const range3 = document.createRange();
        range3.setStart(boldForItalic.firstChild, 2);
        range3.collapse(true);

        const selection3 = window.getSelection();
        if (selection3) {
          selection3.removeAllRanges();
          selection3.addRange(range3);

          const parentInfo3 = findInlineParent(boldForItalic.firstChild, "i");
          console.log(
            "Test 3 - Found parent for italic in bold:",
            parentInfo3.element?.tagName,
            "at offset:",
            parentInfo3.offset,
          );

          const shouldUseI = parentInfo3.element?.tagName.toLowerCase() !== "i";
          console.log("Test 3 - Should use i (not span):", shouldUseI);
          console.log("Test 3 - Expected: true (allows <i> inside <b>)");
        }
      }
    }
  }

  // Expose test function globally for console access
  if (typeof window !== "undefined") {
    (window as any).testRichTextEditor = testInlineElementBehavior;
  }

  function getCurrentBlock(): HTMLElement | null {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;

    let node: Node | null = selection.getRangeAt(0).startContainer;
    while (node && node !== editor.value) {
      if (node.nodeType === 1) {
        const tagName = (node as HTMLElement).tagName.toLowerCase();
        if (["p", "h1", "h2", "h3", "pre"].includes(tagName)) {
          return node as HTMLElement;
        }
      }
      node = node.parentNode;
    }
    return null;
  }

  function setCaret(element: HTMLElement, position: "start" | "end") {
    const range = document.createRange();
    const selection = window.getSelection();

    if (position === "start") {
      range.setStart(element, 0);
    } else {
      range.setStart(element, element.childNodes.length);
    }

    range.collapse(true);
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  function onKeydown(e: KeyboardEvent) {
    // Handle keyboard shortcuts for formatting
    if (e.ctrlKey || e.metaKey) {
      if (e.key === "b") {
        e.preventDefault();
        applyInlineFormat("b", e);
        return;
      } else if (e.key === "i") {
        e.preventDefault();
        applyInlineFormat("i", e);
        return;
      } else if (e.key === "u") {
        e.preventDefault();
        applyInlineFormat("em", e);
        return;
      }
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const currentBlock = getCurrentBlock();
      if (!currentBlock) return;

      const newBlock = document.createElement("p");
      newBlock.innerHTML = "<br>";

      currentBlock.insertAdjacentElement("afterend", newBlock);
      setCaret(newBlock, "start");
    } else if (e.key === "ArrowUp") {
      const currentBlock = getCurrentBlock();
      if (!currentBlock) return;

      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      // Check if we're at the start of the block
      const range = selection.getRangeAt(0);
      const atStart =
        range.startOffset === 0 &&
        (range.startContainer === currentBlock ||
          range.startContainer === currentBlock.firstChild);

      if (atStart) {
        e.preventDefault();
        const prevBlock = currentBlock.previousElementSibling as HTMLElement;
        if (prevBlock) {
          setCaret(prevBlock, "end");
        }
      }
    } else if (e.key === "ArrowDown") {
      const currentBlock = getCurrentBlock();
      if (!currentBlock) return;

      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      // Check if we're at the end of the block
      const range = selection.getRangeAt(0);
      const atEnd =
        range.startOffset === range.startContainer.textContent?.length ||
        (range.startContainer === currentBlock &&
          range.startOffset === currentBlock.childNodes.length);

      if (atEnd) {
        e.preventDefault();
        const nextBlock = currentBlock.nextElementSibling as HTMLElement;
        if (nextBlock) {
          setCaret(nextBlock, "start");
        }
      }
    }
  }

  /**
   * Finds the most appropriate inline parent element for the given node and target tag.
   *
   * Priority logic:
   * 1. First looks for an exact match of the target tag type (prevents nesting)
   * 2. Falls back to any inline element if no exact match is found
   * 3. Calculates the text offset within the found parent element
   *
   * @param startNode - The text node where the cursor is positioned
   * @param targetTag - The tag type we want to apply ('b', 'i', 'em', etc.)
   * @returns Object with the parent element and text offset within it
   */
  function findInlineParent(
    startNode: Node,
    targetTag: string,
  ): { element: HTMLElement | null; offset: number } {
    if (startNode.nodeType !== 3) {
      return { element: null, offset: 0 };
    }

    let parent = startNode.parentNode as HTMLElement;
    let exactMatch: HTMLElement | null = null;
    let fallbackMatch: HTMLElement | null = null;
    let textOffset = 0;

    // Calculate text offset from start of text node
    const range = window.getSelection()?.getRangeAt(0);
    if (range) {
      textOffset = range.startOffset;
    }

    // Traverse up to find inline parents
    while (parent && parent !== editor.value) {
      const parentTag = parent.tagName.toLowerCase();
      if (["span", "b", "i", "em", "strong"].includes(parentTag)) {
        if (parentTag === targetTag && !exactMatch) {
          exactMatch = parent;
          // Calculate offset within this parent's text content
          const walker = document.createTreeWalker(
            parent,
            NodeFilter.SHOW_TEXT,
            null,
          );

          let currentOffset = 0;
          let node;
          while ((node = walker.nextNode())) {
            if (node === startNode) {
              textOffset = currentOffset + textOffset;
              break;
            }
            currentOffset += node.textContent?.length || 0;
          }
          break;
        } else if (!fallbackMatch) {
          fallbackMatch = parent;
        }
      }
      parent = parent.parentNode as HTMLElement;
    }

    return {
      element: exactMatch || fallbackMatch,
      offset: textOffset,
    };
  }

  function splitInlineElement(
    element: HTMLElement,
    offset: number,
  ): { before: HTMLElement | null; after: HTMLElement | null } {
    const tagName = element.tagName.toLowerCase();
    const textContent = element.textContent || "";

    let before: HTMLElement | null = null;
    let after: HTMLElement | null = null;

    if (offset > 0) {
      before = document.createElement(tagName);
      before.textContent = textContent.substring(0, offset);
    }

    if (offset < textContent.length) {
      after = document.createElement(tagName);
      after.textContent = textContent.substring(offset);
    }

    return { before, after };
  }

  /**
   * Applies inline formatting (bold, italic, etc.) to the current selection or cursor position.
   *
   * Key anti-nesting behavior:
   * - If the cursor is inside an inline element of the same type being applied (e.g., pressing Ctrl+B while inside a <b> element),
   *   it creates a new <span> element instead to prevent nesting
   * - This ensures clean HTML structure without nested formatting elements of the same type
   * - When text is selected within an inline element, it splits the element and applies the new format
   *
   * @param tag - The HTML tag to apply ('b', 'i', 'em', 'strong', 'span')
   * @param e - The keyboard event that triggered this action
   */
  function applyInlineFormat(tag: InlineType, e: Event) {
    e.preventDefault();
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (range.collapsed) {
      // Insert empty tag at cursor, splitting inline element if necessary
      let container = range.startContainer;
      let inlineParent: HTMLElement | null = null;
      let offsetInParent = 0;

      // Find if we're inside an inline element
      if (container.nodeType === 3) {
        const parentInfo = findInlineParent(container, tag);
        inlineParent = parentInfo.element;
        offsetInParent = parentInfo.offset;
      }

      if (inlineParent) {
        // Check if we're trying to apply the same format as the parent
        const parentTag = inlineParent.tagName.toLowerCase();
        const newTag = parentTag === tag ? "span" : tag;

        // Split the inline element at cursor position
        const { before, after } = splitInlineElement(
          inlineParent,
          offsetInParent,
        );

        // Create new element with zero-width space for cursor
        const newElement = document.createElement(newTag);
        newElement.textContent = "\u200B";

        // Replace original with split parts and new element
        const fragment = document.createDocumentFragment();
        if (before) fragment.appendChild(before);
        fragment.appendChild(newElement);
        if (after) fragment.appendChild(after);

        inlineParent.replaceWith(fragment);

        // Set cursor after zero-width space
        range.setStart(newElement.firstChild!, 1);
        range.collapse(true);
      } else {
        // Not inside inline element, just insert
        const element = document.createElement(tag);
        element.textContent = "\u200B";
        range.insertNode(element);
        range.setStart(element.firstChild!, 1);
        range.collapse(true);
      }

      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      // Handle text selection - split any inline elements that contain the selection
      const startContainer = range.startContainer;
      const endContainer = range.endContainer;
      const startOffset = range.startOffset;
      const endOffset = range.endOffset;

      // Extract selected text
      const selectedText = range.toString();

      // Handle case where selection is within a single text node inside an inline element
      if (startContainer === endContainer && startContainer.nodeType === 3) {
        // Find the most appropriate parent element
        const parentInfo = findInlineParent(startContainer, tag);
        const targetParent = parentInfo.element;

        if (targetParent) {
          // Check if we're trying to apply the same format as the parent
          const parentTag = targetParent.tagName.toLowerCase();
          const newTag = parentTag === tag ? "span" : tag;

          // Split the parent inline element
          const textContent = startContainer.textContent || "";
          const beforeText = textContent.substring(0, startOffset);
          const afterText = textContent.substring(endOffset);

          const fragment = document.createDocumentFragment();

          // Add before part if exists
          if (beforeText) {
            const beforeElement = document.createElement(parentTag);
            beforeElement.textContent = beforeText;
            fragment.appendChild(beforeElement);
          }

          // Add new formatted element
          const newElement = document.createElement(newTag);
          newElement.textContent = selectedText;
          fragment.appendChild(newElement);

          // Add after part if exists
          if (afterText) {
            const afterElement = document.createElement(parentTag);
            afterElement.textContent = afterText;
            fragment.appendChild(afterElement);
          }

          targetParent.replaceWith(fragment);

          // Set cursor after new element
          range.setStartAfter(newElement);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
          return;
        }
      }

      // Default case - just replace selection with new element
      range.deleteContents();
      const element = document.createElement(tag);
      element.textContent = selectedText;
      range.insertNode(element);

      range.setStartAfter(element);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  function changeBlockType() {
    const currentBlock = getCurrentBlock();
    if (!currentBlock) return;

    const newBlock = document.createElement(nextBlockType.value);
    newBlock.innerHTML = currentBlock.innerHTML;

    currentBlock.replaceWith(newBlock);
    setCaret(newBlock, "end");
  }

  function onInput() {
    if (editor.value) {
      // Fix browser restoring inline formatting
      fixBrowserFormattingRestoration();
      ensureNoTextNodes();
      removeAttributes();
      removeZeroWidthSpacesAfterTyping();
      modelValue.value = editor.value.innerHTML;
    }
  }

  function fixBrowserFormattingRestoration() {
    if (!editor.value) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const container = range.startContainer;

    // Check if cursor is inside a nested inline element that shouldn't exist
    if (container.nodeType === 3) {
      // Text node
      let parent = container.parentNode as HTMLElement;
      let nestedInline = null;

      // Look for nested inline elements
      while (parent && parent !== editor.value) {
        if (
          ["span", "b", "i", "em", "strong"].includes(
            parent.tagName.toLowerCase(),
          )
        ) {
          const grandParent = parent.parentNode as HTMLElement;
          if (
            grandParent &&
            ["span", "b", "i", "em", "strong"].includes(
              grandParent.tagName.toLowerCase(),
            )
          ) {
            nestedInline = parent;
            break;
          }
        }
        parent = parent.parentNode as HTMLElement;
      }

      // If we found nested inline elements, move content out to sibling
      if (nestedInline) {
        const textContent = container.textContent || "";
        const offset = range.startOffset;

        // Create new span for the text
        const newSpan = document.createElement("span");
        newSpan.textContent = textContent;

        // Insert after the nested element
        nestedInline.parentNode?.insertBefore(
          newSpan,
          nestedInline.nextSibling,
        );

        // Remove the text from nested element
        container.textContent = "";

        // Move cursor to new span
        range.setStart(newSpan.firstChild!, offset);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }

  function ensureNoTextNodes() {
    if (!editor.value) return;

    // Check all block elements for direct text nodes
    const blocks = Array.from(editor.value.children) as HTMLElement[];

    blocks.forEach((block) => {
      const nodesToWrap: Node[] = [];

      // Find all direct text nodes in the block
      for (let i = 0; i < block.childNodes.length; i++) {
        const node = block.childNodes[i];
        if (node.nodeType === 3 && node.textContent?.trim()) {
          nodesToWrap.push(node);
        }
      }

      // Wrap each text node in a span
      nodesToWrap.forEach((textNode) => {
        const span = document.createElement("span");
        span.textContent = textNode.textContent;
        block.insertBefore(span, textNode);
        block.removeChild(textNode);
      });
    });
  }

  function removeAttributes() {
    if (!editor.value) return;

    // Remove attributes from all block and inline elements
    const walker = document.createTreeWalker(
      editor.value,
      NodeFilter.SHOW_ELEMENT,
      null,
    );

    const elements: HTMLElement[] = [];
    let node;
    while ((node = walker.nextNode())) {
      const element = node as HTMLElement;
      const tagName = element.tagName.toLowerCase();

      // Check if it's a block or inline element we care about
      if (
        [
          "p",
          "h1",
          "h2",
          "h3",
          "pre",
          "span",
          "b",
          "i",
          "em",
          "strong",
        ].includes(tagName)
      ) {
        elements.push(element);
      }
    }

    // Remove all attributes from these elements
    elements.forEach((element) => {
      const attributes = Array.from(element.attributes);
      attributes.forEach((attr) => {
        element.removeAttribute(attr.name);
      });
    });
  }

  function removeZeroWidthSpacesAfterTyping() {
    if (!editor.value) return;

    const selection = window.getSelection();
    const currentRange =
      selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    const walker = document.createTreeWalker(
      editor.value,
      NodeFilter.SHOW_TEXT,
      null,
    );

    const textNodes: Text[] = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node as Text);
    }

    textNodes.forEach((textNode) => {
      const content = textNode.textContent || "";

      // Remove zero-width spaces if there's real content mixed with them
      if (content.includes("\u200B") && content.length > 1) {
        const isCursorHere =
          currentRange && currentRange.startContainer === textNode;
        const newContent = content.replace(/\u200B/g, "");

        if (isCursorHere && currentRange) {
          // Adjust cursor position after removing zero-width spaces
          const oldOffset = currentRange.startOffset;
          const beforeCursor = content.substring(0, oldOffset);
          const zeroWidthCount = (beforeCursor.match(/\u200B/g) || []).length;
          const newOffset = Math.max(0, oldOffset - zeroWidthCount);

          textNode.textContent = newContent;

          // Restore cursor position
          currentRange.setStart(textNode, newOffset);
          currentRange.collapse(true);
          selection?.removeAllRanges();
          selection?.addRange(currentRange);
        } else {
          textNode.textContent = newContent;
        }
      }
    });
  }

  // Watch for block type changes
  watch(nextBlockType, () => {
    changeBlockType();
  });

  onMounted(() => {
    if (modelValue.value && editor.value) {
      editor.value.innerHTML = modelValue.value;
      ensureNoTextNodes();
    }
  });

  watch(modelValue, (val) => {
    if (editor.value && val !== editor.value.innerHTML) {
      editor.value.innerHTML = val || "<p><br></p>";
      // Ensure no text nodes exist
      ensureNoTextNodes();
      // Only do aggressive cleanup when setting content programmatically
      finalCleanupZeroWidthSpaces();
    }
  });

  function finalCleanupZeroWidthSpaces() {
    if (!editor.value) return;

    const walker = document.createTreeWalker(
      editor.value,
      NodeFilter.SHOW_TEXT,
      null,
    );

    const textNodes: Text[] = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node as Text);
    }

    textNodes.forEach((textNode) => {
      const content = textNode.textContent || "";
      if (content.includes("\u200B")) {
        if (content.length === 1) {
          // Remove standalone zero-width spaces
          textNode.textContent = "";
        } else {
          // Remove zero-width spaces mixed with content
          textNode.textContent = content.replace(/\u200B/g, "");
        }
      }
    });
  }
</script>
