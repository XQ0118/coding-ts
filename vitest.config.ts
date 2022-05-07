import { defineConfig } from 'vitest/config'
import path from 'path'

const resolveFile = (file: string) => path.resolve(__dirname, file)

export default defineConfig({
  test: {
    // setupFiles:[resolveFile('./')]
    // root: 'src'
  }
})
