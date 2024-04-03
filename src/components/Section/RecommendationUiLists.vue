<script setup>
import { onMounted } from 'vue';
import CardElement from '@/elements/Card/CardElement.vue';
import CardHeader from '@/elements/Card/CardHeader.vue';
import CardContent from '@/elements/Card/CardContent.vue';
import { recommendedUIDataStore } from '@/stores/projects-ui';
import { storeToRefs } from 'pinia';

// ? loading component FOR ASYNC CALL

const useStateRecommendedUI = recommendedUIDataStore()
const { fetchingRecommendedData } = useStateRecommendedUI
const { limitDataRecommended } = storeToRefs(useStateRecommendedUI)

await new Promise((res) => setTimeout(async () => {
    res(true)
}, 3000))

onMounted(async () => await fetchingRecommendedData())

</script>

<style scoped>
.title {
    @apply font-semibold text-[#222] text-lg
}
</style>

<template>
    <div class="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">

        <CardElement v-for="(item, index) in limitDataRecommended" :key="index">
            <template #card__header>
                <CardHeader>
                    <template #header__content>
                        <div class="overflow-hidden rounded-xl">
                            <img :src="item.imgUrl" class="object-cover w-full h-full" />
                        </div>
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