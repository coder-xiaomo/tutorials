<template>
    <!-- ------------------- -->
    <!--
    <br>
    props.base: {{ props.base }}
    <br>
    props.sidebarItem.base: {{ props.sidebarItem.base }}
    <br>
-->
    <p v-if="props.sidebarItem.text">
        <a v-if="props.sidebarItem.link" @click="goTo(props.sidebarItem.link)" style="cursor: pointer;">
            {{ props.sidebarItem.text }}
        </a>
        <span style="font-weight: bold;" v-else>
            {{ props.sidebarItem.text }}
        </span>
    </p>
    <!-- ------------------- -->

    <!-- <pre>{{ page }}</pre> -->

    <div v-if="props.sidebarItem.items" :style="props.sidebarItem.text ? 'margin-left: 25px;' : undefined">
        <contents v-for="item in props.sidebarItem.items" :base="props.sidebarItem.base || props.base"
            :sidebar-item="item" />
    </div>
</template>

<script setup lang="ts">
import { useData, useRouter, DefaultTheme } from 'vitepress';

const props = defineProps<{
    base?: string,
    sidebarItem: DefaultTheme.SidebarItem
}>()

const { page } = useData()

const router = useRouter()

function goTo(link: string) {
    const target = (props.base || '') + link?.replace('.md', '.html')
    console.log('base', props.base)
    console.log('link', link)
    console.log('target', target)
    router.go(target)
}
</script>