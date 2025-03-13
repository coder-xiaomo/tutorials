<template>
    <!-- ------------------- -->
    <!--
    <br>
    props.base: {{ props.base }}
    <br>
    props.sidebarItem.base: {{ props.sidebarItem.base }}
    <br>
    -->

    <!-- 跳过当前页面的菜单 -->
    <template v-if="props.sidebarItem.text !== '开始'">
        <p v-if="props.sidebarItem.text">
            <a v-if="props.sidebarItem.link" @click="goTo(props.sidebarItem.link)" style="cursor: pointer;">
                {{ props.sidebarItem.text }}
            </a>
            <span style="font-weight: bold;" v-else>
                {{ props.sidebarItem.text }}
            </span>
        </p>
        <!-- ------------------- -->

        <div v-if="props.sidebarItem.items" :style="props.sidebarItem.text ? 'margin-left: 25px;' : undefined">
            <contents v-for="item in props.sidebarItem.items" :base="props.sidebarItem.base || props.base"
                :sidebar-item="item" />
        </div>
    </template>
</template>

<script setup lang="ts">
import { useRouter, DefaultTheme } from 'vitepress';
import { base } from '../env.mts';

const props = defineProps<{
    base?: string,
    sidebarItem: DefaultTheme.SidebarItem
}>()

const router = useRouter()

function goTo(link: string) {
    const baseUrl = (base.endsWith('/') ? base.substring(0, base.length - 1) : base)
    const target = baseUrl + (props.base || '') + link?.replace('.md', '.html')
    console.log('base', props.base)
    console.log('link', link)
    console.log('target', target)
    router.go(target)
}
</script>