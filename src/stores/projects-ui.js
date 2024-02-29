import { defineStore } from "pinia";
import RecommendedUiList from "@/contents/recommended_lists";
import { computed, reactive, ref } from "vue";

export const recommendedUIDataStore = defineStore(
  "recommended__ui__data",
  () => {
    const limitData = ref(4);
    const recommendedUIData = reactive(RecommendedUiList);

    const getLimitRecommendedUI = computed(() =>
      recommendedUIData.slice(0, limitData.value)
    );

    const incrementDataRecommended = (value) => (limitData.value += value);

    return {
      limitData,
      recommendedUIData,
      getLimitRecommendedUI,
      incrementDataRecommended,
    };
  }
);
