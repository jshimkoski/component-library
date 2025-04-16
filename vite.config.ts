import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  VueUseComponentsResolver,
  VueUseDirectiveResolver
} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      vueTemplate: true,
      vueDirectives: true,
      viteOptimizeDeps: true,
      dts: true
    }),
    Components({
      resolvers: [
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        IconResolver({
          prefix: 'icon',
        }),
      ],
      dts: true,
    }),
    Icons({
      autoInstall: true,
    }),
  ],
})
