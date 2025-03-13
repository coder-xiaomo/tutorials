<template>
    <div v-if="isShow" class="announcement-container">
        <h3 class="announcement-title">{{ title }}</h3>
        <p class="announcement-content">{{ content }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 公告栏创意来自: https://lumen.theojs.cn/guide/announcement

const isShow = ref<boolean>(true)

const title = ref<string>(
    'hahaha'
)

const content = ref<string>(
    'hahaha'
)
</script>

<style scoped>
.announcement-container {
    background-color: #f0f0f0;
    border-radius: 10px;

    /* 窄屏 */
    text-align: left;

    width: min(80%, 360px);

    padding: 10px 15px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
    margin-bottom: 15px;
}

@media (min-width: 960px) {
    .announcement-container {
        /* 宽屏 */
        text-align: unset;

        width: 280px;

        padding: 15px 20px;

        margin-left: unset;
        margin-right: unset;
        margin-top: unset;
        margin-bottom: 15px;
    }
}

.announcement-title {
    font-weight: bold;
}

.announcement-content {}
</style>