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
import {
  LayoutMode,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-before': () => h(ArticleInfo),
      // [配置] 阅读增强
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // [配置] 基于 Git 的页面历史
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

    // [配置] 阅读增强
    app.provide(InjectionKey, {
      // refer: node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/locales/index.mjs
      locales: { // 配置国际化 //
        'zh-CN': { // 配置简体中文 //
          title: {
            title: '阅读增强插件',
          },
          layoutSwitch: {
            titleHelpMessage: '调整页面布局样式，以适配不同的阅读习惯和屏幕环境。',
            optionOriginalWidthHelpMessage: '默认布局宽度',
            contentLayoutMaxWidth: {
              titleHelpMessage: '调整页面布局中内容区域的宽度，以适配不同的阅读习惯和屏幕环境。'
            },
            pageLayoutMaxWidth: {
              titleHelpMessage: '调整页面布局中页面的宽度，以适配不同的阅读习惯和屏幕环境。'
            },
          },
        },
      },
      layoutSwitch: {
        defaultMode: LayoutMode.BothWidthAdjustable,
        pageLayoutMaxWidth: {
          defaultMaxWidth: 96, // 60 - 100
        },
        contentLayoutMaxWidth: {
          defaultMaxWidth: 90, // 60 - 100
        }
      },
    } as Options)
  }
} satisfies Theme
