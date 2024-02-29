<script setup>
const props = defineProps({
    titleContent: {
        type: String,
        required: true
    },
    sectionClass: {
        type: String,
        default: ""
    }
})
</script>

<style scoped>
section {
    @apply px-9 py-12;

    .title {
        @apply text-2xl font-bold mb-6
    }
}
</style>

<template>
    <section :class="`${props.sectionClass}`">
        <h3 class="title">{{ props.titleContent }}</h3>

        <slot name="content" />
    </section>
</template>