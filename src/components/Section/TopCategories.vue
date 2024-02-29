<script setup>
import { reactive, computed } from 'vue';
import CategoryLists from '@/contents/categories_list.js'
import CardTitleWithBg from '@/elements/Card/CardTitleBg.vue'

await new Promise(res => setTimeout(res, 2000))

const topCategoriesRes = reactive(CategoryLists)

const addSlugCategories = computed(() => {
    return topCategoriesRes.map(item => {
        return { ...item, slug: item.title.replaceAll(" ", "-").toLowerCase() }
    })
})
</script>

<template>
    <CardTitleWithBg v-for="(item, index) in addSlugCategories" :key="index" :title="item.title" :bgImg="item.imgUrl" />
</template>
