import { defineConfig } from "vite";
// import path from "path";

import Vue from "@vitejs/plugin-vue";
import TailwindCSS from "@tailwindcss/vite";
import VueRouter from "unplugin-vue-router/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconResolver from "unplugin-icons/resolver";

// https://vite.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
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
      imports: ["vue", "vue-router", "@vueuse/core"],
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
        IconResolver({
          prefix: "icon",
        }),
      ],
      dts: true,
    }),
    Icons({
      autoInstall: true,
    }),
  ],
});
