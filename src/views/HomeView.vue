<script setup>
import { defineAsyncComponent, ref } from 'vue';
import SkeletonHeroSection from '@/components/Skeleton/SkeletonHeroSection.vue';
import SkeletonCards from '@/components/Skeleton/SkeletonCards.vue';
import SectionContent from '@/components/Section/SectionContent.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { recommendedUIDataStore } from '@/stores/projects-ui';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';

const UIDataStore = recommendedUIDataStore()
const { recommendedUIData, getLimitRecommendedUI } = storeToRefs(UIDataStore)
const preloadRecommendedSection = ref(false)

async function LoadMoreRecommendedData(limit) {
  await new Promise((res) => {
    preloadRecommendedSection.value = true
    setTimeout(() => {
      preloadRecommendedSection.value = false
      res(UIDataStore.incrementDataRecommended(limit))
    }, 100)
  })
}

const AsyncHeroSection = defineAsyncComponent({
  loader: () => import('@/components/Section/HeroSection.vue'),
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
            <AsyncHeroSection bgImage="src/assets/img/hero-photo.jpg" />
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
                  <SkeletonCards />
                </template>
              </Suspense>

            </div>
          </template>
        </SectionContent>

        <SectionContent title-content="Recommendation">
          <template #content>
            <div>
              <Suspense v-if="!preloadRecommendedSection">

                <template #default>
                  <div>
                    <AsyncRecommendedUILists />

                    <div :class="`w-full text-center`"
                      v-bind:hidden="recommendedUIData.length === getLimitRecommendedUI.length">
                      <Button label="Load more" class="px-6 py-3 text-white bg-black rounded-md"
                        @click="LoadMoreRecommendedData(4)" />
                    </div>
                  </div>
                </template>

                <template #fallback>
                  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <SkeletonCards />
                  </div>
                </template>
              </Suspense>
            </div>
          </template>

        </SectionContent>

      </div>

    </template>
  </MainLayout>
</template>
