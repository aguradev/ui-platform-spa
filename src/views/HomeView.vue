<script setup>
import { computed, onUnmounted, defineAsyncComponent, ref } from 'vue';
import SkeletonCards from '@/components/Skeleton/SkeletonCards.vue';
import SectionContent from '@/components/Section/SectionContent.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { recommendedUIDataStore } from '@/stores/projects-ui';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';
import PhotoImage from '@/assets/img/hero-photo.jpg'
import HeroSection from '@/components/Section/HeroSection.vue';
import TopCategoriesVue from '@/components/Section/TopCategories.vue';

const UIDataStore = recommendedUIDataStore()
const { incrementDataRecommended } = UIDataStore
const { limitData, recommendedUIData } = storeToRefs(UIDataStore)
const preloadRecommendedSection = ref(false)

onUnmounted(() => {
  //? reset limit data when goto another page
  limitData.value = 4
})

async function LoadMoreRecommendedData(limit) {
  await new Promise((res) => {
    updatePreloadRecommendedSection.value = true
    setTimeout(() => {
      updatePreloadRecommendedSection.value = false
      res(incrementDataRecommended(limit))
    }, 100)
  })
}

const updatePreloadRecommendedSection = computed({
  get() {
    return preloadRecommendedSection.value
  },
  set(newValue) {
    preloadRecommendedSection.value = newValue
  }
})

const AsyncRecommendedUILists = defineAsyncComponent({
  loader: () => import('@/components/Section/RecommendationUiLists.vue'),
  loadingComponent: SkeletonCards
})

</script>

<template>
  <MainLayout>
    <template #content>
      <div>

        <HeroSection :bgImage="PhotoImage" />

        <SectionContent titleContent="Our Service Kits">

          <template #content>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <TopCategoriesVue />
            </div>
          </template>
        </SectionContent>

        <SectionContent title-content="Recommendation">

          <template #content>

            <Suspense v-if="!preloadRecommendedSection">

              <template #default>
                <div>
                  <AsyncRecommendedUILists />

                  <div :class="`w-full text-center`" v-if="limitData <= recommendedUIData.length">
                    <Button label="Load more" class="px-6 py-3 text-white bg-black rounded-md"
                      @click="LoadMoreRecommendedData(4)" />
                  </div>
                </div>
              </template>

              <template #fallback>
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <SkeletonCards v-for="(index) in limitData" :key="index" />
                </div>
              </template>
            </Suspense>

          </template>

        </SectionContent>

      </div>

    </template>
  </MainLayout>
</template>
