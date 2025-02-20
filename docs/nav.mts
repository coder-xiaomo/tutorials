import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Home2',
        link: '/how-to/index',
        activeMatch: '/how-to/',
    },
    {
        text: 'Examples',
        link: '/markdown-examples',
    },
]