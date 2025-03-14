import { defineConfig } from 'vitepress'
import { base } from '../env.mts'
import { sidebar } from '../sidebar.mts'
import { nav } from '../nav.mts'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
// import {
//   InlineLinkPreviewElementTransform
// } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      port: 5678,
    },

    plugins: [
      // [配置] 基于 Git 的页面历史
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/coder-xiaomo/tutorials',
      }),
      GitChangelogMarkdownSection(),
    ],

    optimizeDeps: {
      exclude: [
        // [配置] 行内链接预览
        // '@nolebase/vitepress-plugin-inline-link-preview/client',
        // [配置] 阅读增强
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
        // [配置] 行内链接预览
        // '@nolebase/vitepress-plugin-inline-link-preview',
        // [配置] 阅读增强
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
        // [配置] @theojs/lumen
        // issue: https://github.com/Theo-Messi/lumen/issues/234
        'dayjs',
      ],
    },
  },

  title: "就这么弄 (🚧 施工中)",
  description: "简单步骤与实用技巧",

  base: base,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/assets/logo.svg',
    },

    nav: nav,

    sidebar: sidebar,

    editLink: {
      text: '在 GitHub 上编辑此页面',
      pattern: 'https://github.com/coder-xiaomo/tutorials/edit/main/docs/:path',
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      {
        // GitHub repo
        icon: {
          svg: `<svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle"><path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path></svg>`
        },
        link: 'https://github.com/coder-xiaomo/tutorials',
      },
      {
        // Gitee repo
        // https://gitee.com/static/images/logo-en.svg
        icon: {
          svg: `<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" fill="#c71d23" r="16"/><path d="m24.0987698 14.2225144h-9.0863697c-.4362899.000207-.7900048.3538292-.790326.7901191l-.0005173 1.9752185c-.0003277.4363707.353328.7902117.7896987.790326.0000712 0 .0001424 0 .0002135-.0002135l5.5317648-.0000461c.4363708-.0000102.7901221.3537352.7901257.790106 0 .0000022 0 .0000044-.0000066.0000066v.1975077.1975318c0 1.3091122-1.0612451 2.3703573-2.3703573 2.3703573h-7.5067195c-.4363081-.0000218-.790009-.353713-.7900429-.7900211l-.0002069-7.5059917c-.0001014-1.3091122 1.0611145-2.3703865 2.3702267-2.3704226.0000217 0 .0000435 0 .0000653.0000653h11.0602463c.4361793-.0004902.7898484-.35394.7906091-.79011894l.0012251-1.97521881c.0007606-.43637034-.3527683-.79033806-.7891389-.79060871-.0001634-.0000001-.0003268-.00000015-.0004901.00048976h-11.0617654c-3.27278051 0-5.92589329 2.65311278-5.92589329 5.9258933v11.0612755c0 .4363707.35374837.7901191.7901191.7901191h11.65447149c2.9454379 0 5.3331872-2.3877493 5.3331872-5.3331872v-4.5430682c0-.4363707-.3537484-.7901191-.7901191-.7901191z" fill="#fff"/></svg>`
        },
        link: 'https://gitee.com/coder-xiaomo/tutorials',
      },
      {
        // Gitcode repo
        icon: {
          svg: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M685.679715 183.998617l-40.447039 22.783459-9.343778 5.418538a203.259173 203.259173 0 0 1-124.583708 30.463276 239.268984 239.268984 0 0 0-81.192739 5.20521c-46.71889 12.714365-89.171216 4.778553-132.348856-12.543702a316.749811 316.749811 0 0 0-33.791198-9.045119l1.023976 24.106094c0.597319 14.506322 1.151973 27.988669 2.133283 41.471015 2.389277 31.572583-6.058523 60.286568-21.418158 88.189906a387.190804 387.190804 0 0 0-50.601465 196.390002c2.389277 111.570684 69.630346 194.427382 182.438334 230.010538 99.069647 31.31659 198.736613 29.951289 298.232917 5.546534a279.502695 279.502695 0 0 0 141.649969-83.752677c9.258447-10.026429 17.492918-20.991501 24.575416-32.681891 28.841982-48.68151 9.557106-94.205763-46.505562-103.464209a312.184586 312.184586 0 0 0-44.798936-3.413252l-15.146307-0.255994c-14.079666-0.127997-28.116666-0.255994-42.068334-1.450632-48.169523-3.92524-96.424377-8.277137-144.124577-15.786292-23.679438-3.839909-43.561632-19.412872-46.3349-45.35359-2.986596-28.500656 4.693222-57.214641 31.401921-71.038312a202.917847 202.917847 0 0 1 76.968839-23.46611c81.022076-5.759863 162.470808-0.511988 242.127582 15.487632 139.431355 28.585988 212.261625 166.268051 145.27655 292.259726-94.504422 177.489118-242.468908 279.886686-447.98936 284.707905-160.422857 3.839909-301.731501-47.102881-413.003525-165.244076C-122.365094 582.410488 3.071927 132.074517 369.612555 23.917085c169.979963-49.918814 327.800215-21.332827 471.45547 82.302046 51.625441 37.247115 64.851793 99.112313 34.473848 149.628446-25.258067 42.111-72.104954 61.182547-121.853106 49.66282-31.99924-7.466489-55.124024-38.996407-61.395876-82.472707l-0.98131-8.277137a123.474401 123.474401 0 0 0-1.791957-11.434395l-3.839909-19.327541z" fill="#DA203E"></path></svg>`
        },
        link: 'https://gitcode.com/coder-xiaomo/tutorials',
      },
    ],

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最近更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  // markdown: {
  //   config(md) {
  //     // 其他 markdown-it 配置... //
  //     // [配置] 行内链接预览
  //     // refer: https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-inline-link-preview/getting-started
  //     md.use(InlineLinkPreviewElementTransform)
  //   }
  // },
})
