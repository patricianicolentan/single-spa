import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

export default defineConfig({
  plugins: [
    vue(),
    vitePluginSingleSpa({
      // entry: 'src/main.js' // this is the actual spa entry, not spaEntryPoints
      type: 'mife',
      serverPort: 8081,
      spaEntryPoints: 'src/main.js',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Ensure the dev server uses the same port as set in the plugin
  server: {
    port: 8081
  }
  // build: {
  //   target: 'esnext',
  //   minify: false,
  //   outDir: 'dist',
  //   rollupOptions: {
  //     output: {
  //       format: 'system',
  //       entryFileNames: 'js/app.js', // what single-spa expects
  //     },
  //   },
  // },
  // server: {
  //   port: 8081,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // },
})
