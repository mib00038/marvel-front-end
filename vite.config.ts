import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  esbuild: {
    jsxInject: 'import React from \'react\'',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [
      "./setupVitest.ts",
      "./jest-setup.ts"
    ]
  },
})


