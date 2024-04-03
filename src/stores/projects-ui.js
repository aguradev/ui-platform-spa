import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const recommendedUIDataStore = defineStore("RecommendedUIFetch", () => {
  const limitData = ref(4);
  const recommendedUIData = reactive([]);

  const limitDataRecommended = computed(() => {
    return recommendedUIData.slice(0, limitData.value);
  });

  const getRandomRecommendedData = computed(() => {
    const startIndex = Math.floor(Math.random() * recommendedUIData.length - 1);

    const endIndex = startIndex + 4;

    return recommendedUIData.slice(startIndex, endIndex);
  });

  const incrementDataRecommended = (value) => (limitData.value += value);
  const fetchingRecommendedData = async () => {
    try {
      const fetchRecommendedUI = await fetch(
        `${import.meta.env.VITE_BASE_URL_API}/recommended-ui-posts`
      );

      if (fetchRecommendedUI.status == 200) {
        recommendedUIData.splice(
          0,
          recommendedUIData.length,
          ...(await fetchRecommendedUI.json())
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    limitData,
    recommendedUIData,
    limitDataRecommended,
    getRandomRecommendedData,
    incrementDataRecommended,
    fetchingRecommendedData,
  };
});
