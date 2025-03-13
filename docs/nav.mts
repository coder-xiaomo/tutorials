import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页',
        link: '/',
    },
    {
        text: '教程',
        link: '/how-to/intro',
        activeMatch: '/how-to/',
    },
    {
        text: 'Examples',
        link: '/markdown-examples',
    },
]