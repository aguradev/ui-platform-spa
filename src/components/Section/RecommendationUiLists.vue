<script setup>
import Image from 'primevue/image';
import CardElement from '@/elements/Card/CardElement.vue';
import CardHeader from '@/elements/Card/CardHeader.vue';
import CardContent from '@/elements/Card/CardContent.vue';
import { recommendedUIDataStore } from '@/stores/projects-ui';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

// ? loading component FOR ASYNC CALL
await new Promise(res => setTimeout(res, 2000))

const { getLimitRecommendedUI } = storeToRefs(recommendedUIDataStore())
const recommendedUIData = ref([])

onMounted(() => {
    recommendedUIData.value = [...getLimitRecommendedUI.value] || []
})
</script>

<style scoped>
.title {
    @apply font-semibold text-[#222] text-lg
}
</style>

<template>
    <div class="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">

        <CardElement v-for="(item, index) in recommendedUIData" :key="index">
            <template #card__header>
                <CardHeader>
                    <template #header__content>
                        <Image :src="item.imgUrl" />
                    </template>
                </CardHeader>
            </template>

            <template #card__content>
                <CardContent>
                    <template #body__content>
                        <h3 class="title">{{ item.title }}</h3>
                    </template>
                </CardContent>
            </template>
        </CardElement>
    </div>
</template>