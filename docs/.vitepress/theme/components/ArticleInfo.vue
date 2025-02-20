<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, onUpdated, ref } from 'vue';

const { frontmatter, page } = useData()

// 动态计算字数
const wordCount = ref(0)

// 获取页面的纯文本内容并计算字数
const getWordCount = () => {
    const content = document.querySelector('main')?.innerText || ''

    // const words = content.replace(/\s+/g, ' ').trim().split(' ')
    // const words = content.match(/\S/g);
    // 使用正则匹配所有的字母、数字、中文字符和常见的标点符号
    // const words = content.match(/[\w\u4e00-\u9fa5]+/g) || []

    // console.log('字数统计', words)
    // // 计算字数，去除空白符
    // return words ? words.length : 0;

    // 使用正则表达式分别匹配中文和英文单词
    const chineseWords = content.match(/[\u4e00-\u9fa5]/g) || []  // 匹配所有中文字符
    const englishWords = content.match(/[a-zA-Z0-9]+/g) || []   // 匹配所有英文单词

    // 中文字符数
    const chineseCount = chineseWords.length

    // 英文单词数
    const englishCount = englishWords.length

    // 输出调试信息
    // console.log('中文字符数:', chineseCount, chineseWords)
    // console.log('英文单词数:', englishCount, englishWords)

    return chineseCount + englishCount  // 总字数
}

onMounted(() => {
    console.log('ArticleInfo.vue onMounted')
    wordCount.value = getWordCount()
})

onUpdated(() => {
    console.log('ArticleInfo.vue onMounted')
    wordCount.value = getWordCount()
})
</script>

<template>
    <div class="article-info">
        <p>
            字数统计：约 {{ wordCount }} 字
        </p>
        <p v-if="frontmatter.createTime" class="create-date">
            创建时间：{{ frontmatter.createTime }}
        </p>
        <p v-if="frontmatter.updateTime" class="update-date">
            最后更新：{{ frontmatter.updateTime }}
        </p>
    </div>
</template>

<style scoped>
.article-info {
    margin-bottom: 2rem;
    padding: 10px 15px;
    border-left: 4px solid #42b883;
    background-color: var(--vp-c-bg-soft);
    line-height: 1.8em;

    font-size: small;

    display: grid;
    grid-template-columns: repeat(auto-fit, 180px);
}
</style>