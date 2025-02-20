import { DefaultTheme } from 'vitepress'

const serialNumberMap = {}

function serial(key) {
    if (!serialNumberMap[key]) {
        serialNumberMap[key] = 0
    }
    const serialNumber = ++serialNumberMap[key] // `${++serialNumberMap[key]}. `

    if (key === '') {
        return `${serialNumber}. 🐬 `
    }

    if (!key.includes('.')) {
        return `🌟 `
    }
    return '' // `✨ `
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
                text: `${serial('')} Linux 系统如何 ... ?`,
                items: [
                    {
                        text: `${serial('linux')}安装操作系统`,
                        items: [
                            {
                                text: `${serial('linux.system')}Ubuntu 24.04 Desktop 安装`,
                                link: 'system/linux/install-ubuntu-desktop',
                            },
                            {
                                text: `${serial('linux.system')}Ubuntu 24.04 Server 安装`,
                                link: 'system/linux/install-ubuntu-server',
                            },
                        ]
                    },
                    {
                        text: `${serial('linux')}安装数据库`,
                        items: [
                            {
                                text: `${serial('linux.db')}MySQL 8.x 安装 & 配置 (Ubuntu)`,
                                link: 'database/mysql/install-on-ubuntu',
                            },
                            {
                                text: `${serial('linux.db')}redis 安装 & 配置`,
                                link: 'database/redis/install-on-ubuntu',
                            },
                        ]
                    },
                    {
                        text: `${serial('linux')}配置编程语言`,
                        items: [
                            {
                                text: `${serial('linux.env')}Node.js & npm 安装 & 配置 (Ubuntu)`,
                                link: 'programming-language/node/install-on-ubuntu',
                            },
                        ]
                    },
                    {
                        text: `${serial('linux')}安装开发工具`,
                        items: [
                            {
                                text: `${serial('linux.develop')}MySQL 8.x 安装 & 配置 (Ubuntu)`,
                                link: 'database/mysql/install-on-ubuntu',
                            },
                        ]
                    },
                ]
            },
            {
                text: `${serial('')} Windows 系统如何 ... ?`,
                items: [
                    {
                        text: `${serial('windows')}安装数据库`,
                        items: [
                            {
                                text: `${serial('windows.db')}MySQL 8.x 安装 & 配置`,
                                link: 'database/mysql/install-on-windows',
                            },
                            {
                                text: `${serial('windows.db')}redis 安装 & 配置`,
                                link: 'database/redis/install-on-windows',
                            },
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