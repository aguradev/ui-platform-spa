<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import SkeletonHeroSection from '@/components/Skeleton/SkeletonHeroSection.vue';
import SkeletonCards from '@/components/Skeleton/SkeletonCards.vue';
import SectionContent from '@/components/Section/SectionContent.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { recommendedUIDataStore } from '@/stores/projects-ui';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';
import PhotoImage from '@/assets/img/hero-photo.jpg'

const UIDataStore = recommendedUIDataStore()
const { limitData, recommendedUIData, getLimitRecommendedUI } = storeToRefs(UIDataStore)
const preloadRecommendedSection = ref(false)

async function LoadMoreRecommendedData(limit) {
  await new Promise((res) => {
    updatePreloadRecommendedSection.value = true
    setTimeout(() => {
      updatePreloadRecommendedSection.value = false
      res(UIDataStore.incrementDataRecommended(limit))
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

const AsyncHeroImageSection = defineAsyncComponent({
  loader: () => import('@/components/Section/HeroSection.vue')
})

const AsyncHeroSectionBgVideo = defineAsyncComponent({
  loader: () => import('@/components/Section/HeroSectionBgVideo.vue'),
})

const AsyncTopCategoriesSection = defineAsyncComponent({
  loader: () => import('@/components/Section/TopCategories.vue'),
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

        <Suspense>
          <template #default>
            <AsyncHeroImageSection :bg-image="PhotoImage" />
          </template>

          <template #fallback>
            <SkeletonHeroSection />
          </template>
        </Suspense>

        <SectionContent titleContent="Our Service Kits">
          <template #content>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <Suspense>
                <template #default>
                  <AsyncTopCategoriesSection />
                </template>

                <template #fallback>
                  <SkeletonCards v-for="(item, index) in 4" :key="index" />
                </template>
              </Suspense>

            </div>
          </template>
        </SectionContent>

        <SectionContent title-content="Recommendation">
          <template #content>

            <Suspense v-if="!preloadRecommendedSection">

              <template #default>
                <div>
                  <AsyncRecommendedUILists />

                  <div :class="`w-full text-center`" v-if="recommendedUIData.length !== getLimitRecommendedUI.length">
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
