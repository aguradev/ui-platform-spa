<script setup>
import { reactive, computed } from 'vue';
import CategoryLists from '@/contents/categories_list.js'
import CardTitleWithBg from '@/elements/Card/CardTitleBg.vue'

const topCategoriesRes = reactive(CategoryLists)

const withSlugCategories = computed(() => {
    return topCategoriesRes.map(item => {
        return { ...item, slug: item.title.replaceAll(" ", "-").toLowerCase() }
    })
})
</script>

<template>
    <CardTitleWithBg v-for="(item, index) in withSlugCategories" :key="index" :title="item.title"
        :bgImg="item.imgUrl" />
</template>
