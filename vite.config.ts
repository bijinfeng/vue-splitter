import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import pj from './package.json'

const external = [...Object.keys(pj.dependencies), ...Object.keys(pj.peerDependencies)]

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      external,
      input: [resolve(__dirname, 'src/index.ts')],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs',
          chunkFileNames: '[name].cjs',
          assetFileNames: '[name].[ext]',
        },
      ],
    },
  },
})
