import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Home2',
        link: '/how-to/intro',
        activeMatch: '/how-to/',
    },
    {
        text: 'Examples',
        link: '/markdown-examples',
    },
]