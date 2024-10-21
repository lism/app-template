import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  react: 'vite',
  restrictedSyntax: ['jsx', 'tsx'],
  strict: true,
  tailwindCSS: false,
  unocss: true,
}, {
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': 'off',
  },
  ignores: ['**/*.d.ts'],
})
