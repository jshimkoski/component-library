import { defineConfig } from "vite";

import Vue from "@vitejs/plugin-vue";
import TailwindCSS from "@tailwindcss/vite";
import VueRouter from "unplugin-vue-router/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    VueRouter({
      logs: true,
      routesFolder: [
        {
          src: "src/pages",
        },
      ],
    }),
    Vue(),
    TailwindCSS(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
      ],
      dirs: ["src/composables", "src/types"],
      vueTemplate: true,
      vueDirectives: true,
      viteOptimizeDeps: true,
      dts: true,
    }),
    Components({
      resolvers: [
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
      ],
      dts: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ComponentLibrary',
      fileName: (format) => `component-library.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
