// @ts-check
import { defineConfig } from 'astro/config'
import { remarkAlert } from 'remark-github-blockquote-alert'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkAlert, remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [react()],
})
