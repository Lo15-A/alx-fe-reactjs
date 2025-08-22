import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // forces .js to be parsed as JSX
    include: /src\/.*\.[jt]sx?$/,
  },
})