import type { FooterData as FooterDataType } from '@theojs/lumen'

// [配置] 首页 Footbar
export const FooterData: FooterDataType = {
    // beian: { icp: '备案号', police: '公网安备号', showIcon: true },
    author: {
        name: 'coder-xiaomo', // 程序员小墨
        // link: 'https://',
    },
    group: [
        // {
        //     title: '外部链接',
        //     icon: 'bx:link', // `iconify`图标
        //     color: 'rgba(255, 87, 51, 1)',
        //     links: [
        //         { name: '示例1', link: 'https://', icon: 'solar:book-bold' },
        //         { name: '示例2', link: 'https://' }
        //     ]
        // },
        {
            title: '开源地址',
            icon: 'bx:link',
            color: 'rgba(255, 87, 51, 1)',
            links: [
                {
                    name: 'GitHub',
                    icon: 'octicon:mark-github-16',
                    link: 'https://github.com/coder-xiaomo/tutorials',
                },
                {
                    name: 'Gitee (码云)',
                    link: 'https://gitee.com/coder-xiaomo/tutorials',
                },
                {
                    name: 'GitCode',
                    link: 'https://gitcode.com/coder-xiaomo/tutorials',
                },

            ]
        }
    ]
}