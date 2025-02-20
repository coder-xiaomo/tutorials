import { defineConfig } from 'vitepress'
import { sidebar } from '../sidebar.mts'
import { nav } from '../nav.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      port: 5678,
    },
  },
  title: "就这么弄",
  description: "简单步骤与实用技巧",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/assets/logo.svg',
    },

    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: '最近更新',
    },
  }
})
