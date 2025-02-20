import { DefaultTheme } from 'vitepress'

const serialNumberMap = {}

function serial(key) {
    if (!serialNumberMap[key]) {
        serialNumberMap[key] = 0
    }
    const serialNumber = ++serialNumberMap[key] // `${++serialNumberMap[key]}. `
    // return
    if (!key.includes('.')) {
        return `🌟 `
    }
    return `✨ `
}

export const sidebar: DefaultTheme.Sidebar = {
    '/how-to/': {
        base: '/how-to/',
        items: [
            {
                text: '开始',
                items: [
                    {
                        text: '教程简介',
                        link: 'intro',
                    },
                ]
            },
            {
                text: 'Linux 系统如何 ... ?',
                items: [
                    {
                        text: `${serial('linux')}安装数据库`,
                        items: [
                            {
                                text: `${serial('linux.db')}MySQL 8.x 安装 & 配置 (Ubuntu)`,
                                link: 'database/mysql/install-on-ubuntu',
                            }
                        ]
                    },
                ]
            },
            {
                text: 'Windows 系统如何 ... ?',
                items: [
                    {
                        text: `${serial('win')}安装数据库`,
                        items: [
                            {
                                text: `${serial('win.db')}MySQL 8.x 安装 & 配置`,
                                link: 'database/mysql/install-on-windows.md',
                            }
                        ]
                    },
                ]
            },
        ]
    },
    '/': [

        {
            text: 'Examples',
            items: [
                { text: 'Markdown Examples', link: '/markdown-examples' },
                { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }
    ]
}