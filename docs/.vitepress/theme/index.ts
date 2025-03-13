// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
import ArticleInfo from './components/ArticleInfo.vue'
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-before': () => h(ArticleInfo),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(NolebaseGitChangelogPlugin, {
      // see: https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-git-changelog/configure-ui
      locales: {
        'zh-CN': {
          changelog: {
            title: '页面历史',
            noData: '暂无最近变更历史',
            lastEdited: '本页面最后编辑于 {{daysAgo}}',
            lastEditedDateFnsLocaleName: 'zhCN',
            viewFullHistory: '查看完整历史',
            committedOn: '于 {{date}} 提交',
          }
        },
      }
    })
  }
} satisfies Theme
