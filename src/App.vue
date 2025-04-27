<template>
  <DocsLayout>
    <template #header>
      <div
        class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3"
      >
        <div class="flex items-center space-x-3">
          <span class="text-green-600 font-bold text-xl">Docs Layout</span>
        </div>
        <nav class="hidden md:flex space-x-6">
          <a
            href="#"
            class="text-gray-700 hover:text-green-600 font-medium"
            >Guide</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-green-600 font-medium"
            >API</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-green-600 font-medium"
            >Examples</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-green-600 font-medium"
            >Blog</a
          >
        </nav>
      </div>
    </template>
    <template #left-bar>
      <nav class="space-y-2">
        <a
          href="#"
          class="block py-2 px-3 rounded hover:bg-green-50 font-medium text-green-700"
          >Introduction</a
        >
        <a
          href="#"
          class="block py-2 px-3 rounded hover:bg-green-50"
          >Getting Started</a
        >
        <a
          href="#"
          class="block py-2 px-3 rounded hover:bg-green-50"
          >Directory Structure</a
        >
        <a
          href="#"
          class="block py-2 px-3 rounded hover:bg-green-50"
          >Configuration</a
        >
        <a
          href="#"
          class="block py-2 px-3 rounded hover:bg-green-50"
          >Deployment</a
        >
      </nav>
    </template>
    <template #content>
      <h1>Welcome to Nuxt Documentation</h1>
      <p>
        This is a sample documentation page styled like a common documentation
        site. Use the sidebar to navigate and the table of contents to jump
        between sections.
      </p>
      <h2 id="getting-started">Getting Started</h2>
      <p>
        Learn how to set up your project with Tailwind CSS and start building
        fast, modern web apps.
      </p>
      <h2 id="directory-structure">Directory Structure</h2>
      <p>
        Understand the recommended project structure for scalable applications.
      </p>
      <h2 id="configuration">Configuration</h2>
      <p>Customize your app using the powerful config file.</p>
      <h2 id="deployment">Deployment</h2>
      <p>Deploy your app to production with confidence.</p>
      <div
        id="app"
        class="mx-auto max-w-3xl py-4"
      >
        <h1>My Vue App</h1>
        <p class="text-2xl">This is a simple Vue.js application.</p>
        <div class="grid gap-4">
          <Avatar
            src="https://jasonshimmy.com/jason.jpg"
            alt="Jason Shimmy"
          />
          <Tooltip text="Hello world">
            <p class="p-8 bg-red-400">Show a tooltip</p>
          </Tooltip>
          <Tooltip type="rich">
            <template #text>
              <div>
                <p class="text-gray-500 font-semibold text-sm">Hello world</p>
                <p>This is a rich content tooltip.</p>
              </div>
            </template>
            <p class="p-8 bg-red-400">Show a rich tooltip</p>
          </Tooltip>
          <div class="flex items-center gap-1">
            <Switch
              v-model="toggleSwitch"
              label="Switch 1"
              description="This is a Switch"
            />
            <Switch
              v-model="toggleSwitch"
              label="Switch 2"
              disabled
            />
          </div>
          <Button
            @click.stop="dialog = !dialog"
            ref="dialogTrigger"
          >
            <span>Open Dialog</span>
            <Badge label="12" />
          </Button>
          <Dialog
            v-model="dialog"
            :trigger-ref="dialogTrigger?.$el"
          />
          <div class="grid">
            <Checkbox
              v-model="checkbox"
              label="Amy"
              value="Amy"
              description="This is a Checkbox with Amy value"
            />
            <Checkbox
              v-model="checkbox"
              label="Jason"
              value="Jason"
              disabled
              description="This is a Checkbox with Jason value"
            />
            <Checkbox
              v-model="checkbox"
              label="Ada"
              value="Ada"
            />
            <Checkbox
              v-model="checkbox"
              label="Sadie"
              value="Sadie"
              disabled
            />
          </div>
          <div class="grid">
            <Radio
              v-model="radio"
              label="Amy"
              value="Amy"
              descripton="This is a Radio with Amy value"
            />
            <Radio
              v-model="radio"
              label="Jason"
              value="Jason"
              disabled
              description="This is a Radio with Jason value"
            />
            <Radio
              v-model="radio"
              label="Ada"
              value="Ada"
            />
            <Radio
              v-model="radio"
              label="Sadie"
              value="Sadie"
              disabled
            />
          </div>
          <div class="grid">
            <RadioGroup
              v-model="radiogroup"
              :options="radioogroupoptions"
              label="Radio Group Label"
              description="This is a radio group"
            />
          </div>
          <div>
            <Progress
              v-model="progress"
              :max="100"
              label="Progress"
              description="This is a progress indicator"
            />
          </div>
          <div class="grid gap-6">
            <Select
              v-model="select"
              :options="[
                { label: 'Option 1', value: { name: 'Jason' } },
                { label: 'Option 2', value: { name: 'Amy' } },
                { label: 'Option 3', value: { name: 'Ada' }, disabled: true },
              ]"
              label="Select"
              description="This is a select field"
              name="select"
              placeholder="Select an option..."
              required
              showMarker
            />
            <TextField
              v-model="text"
              label="Text Field"
              description="This is a text field"
              name="text-field"
              placeholder="Type something..."
              required
              showMarker
              class="border rounded-md p-2"
            />
            <TextField
              v-model="email"
              label="Email Field"
              name="email-field"
              type="email"
              placeholder="Type an email..."
              required
              showMarker
              class="border rounded-md p-2"
            />
            <TextEditor
              v-model="texteditor"
              label="Text Editor"
              description="This is a text editor"
              name="text-editor"
              placeholder="Type something..."
              class="border rounded-md p-2"
              required
              show-marker
            />
          </div>
          <div class="flex flex-wrap items-center gap-1">
            <Button
              label="Click me"
              @click="() => console.log('Button clicked!')"
            />
            <Button
              label="Link"
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Button
              label="Disabled Button"
              disabled
            />
            <Button
              label="Submit Button"
              type="submit"
              @click="() => console.log('Button clicked!')"
            />
            <Button
              label="Reset Button"
              type="reset"
              @click="() => console.log('Button clicked!')"
            />
            <Button
              label="Link with Avatar"
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar
                src="https://jasonshimmy.com/jason.jpg"
                alt="Jason Shimmy"
                size="sm"
              />
              <span>Link with Avatar</span>
            </Button>
            <Menu>
              <MenuItem>Item 1</MenuItem>
              <MenuItem disabled>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
            </Menu>
            <Menu label="Another Menu">
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
            </Menu>
            <Menu
              label="Another Menu"
              disabled
            >
              <MenuItem>Item 1</MenuItem>
              <MenuItem>Item 2</MenuItem>
              <MenuItem>Item 3</MenuItem>
            </Menu>
          </div>
          <div class="flex flex-wrap items-center gap-1">
            <Link
              label="Link"
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Link
              label="Button"
              @click="() => console.log('Button clicked!')"
            />
            <Link
              label="Disabled Button"
              disabled
            />
            <Link
              label="Submit Button"
              type="submit"
              @click="() => console.log('Button clicked!')"
            />
            <Link
              label="Reset Button"
              type="reset"
              @click="() => console.log('Button clicked!')"
            />
            <Link
              label="Link with Icon"
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm1.5 11.5a1.5 1.5 0 11-3 0V9a1.5 1.5 0 013 0v4.5zM10 7a1.5 1.5 0 110-3A1.5 1.5 0 0110 7z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </template>
    <template #right-bar>
      <nav>
        <div class="font-semibold text-gray-700 mb-4">On this page</div>
        <ul class="space-y-2 text-sm">
          <li>
            <a
              href="#getting-started"
              class="block px-2 py-1 rounded hover:bg-green-50"
              >Getting Started</a
            >
          </li>
          <li>
            <a
              href="#directory-structure"
              class="block px-2 py-1 rounded hover:bg-green-50"
              >Directory Structure</a
            >
          </li>
          <li>
            <a
              href="#configuration"
              class="block px-2 py-1 rounded hover:bg-green-50"
              >Configuration</a
            >
          </li>
          <li>
            <a
              href="#deployment"
              class="block px-2 py-1 rounded hover:bg-green-50"
              >Deployment</a
            >
          </li>
        </ul>
      </nav>
    </template>
    <template #footer>
      <span class="text-gray-500">© 2025 Component Library.</span>
    </template>
  </DocsLayout>
</template>

<script setup lang="ts">
const toggleSwitch = ref(true);
const checkbox = ref(["Jason", "Sadie"]);
const radio = ref("Jason");
const radiogroup = ref("Jason");
const radioogroupoptions = ref([
  { label: "Jason", value: "Jason", description: "This is a description." },
  { label: "Amy", value: "Amy", disabled: true },
  { label: "Ada", value: "Ada" },
  { label: "Sadie", value: "Sadie" },
]);
const dialogTrigger = useTemplateRef("dialogTrigger");
const dialog = ref(false);
const text = ref("");
const email = ref("");
const texteditor = ref("");
const select = ref("option1");
const progress = ref(50);
</script>
