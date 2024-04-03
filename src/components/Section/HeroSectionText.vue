<script setup>
import Button from "primevue/button";
const props = defineProps({
    title: String,
    slogan: String
})
</script>

<style scoped>
.hero {
    @apply flex px-6 py-12 gap-x-8 flex-col items-center md:px-44 lg:py-32;

    .heading-1 {
        @apply text-5xl text-center mb-6 leading-normal font-semibold lg:mb-8 lg:text-8xl lg:max-w-full lg:leading-snug;
    }

    .sub-1 {
        @apply text-lg max-w-[80%] leading-[36px] text-center;
    }

    .cta {
        @apply flex justify-center w-full gap-x-8 mt-14;
    }
}
</style>

<template>
    <section class="hero">
        <h1 class="heading-1">{{ props.title }}</h1>
        <p class="leading-9 sub-1">{{ props.slogan }}</p>

        <div class="cta">
            <Button label="Get started" class="px-6 py-3 text-white bg-[#222]" />
        </div>
    </section>
</template>