<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Card from "primevue/card"
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    bgImg: {
        type: String,
        default: ""
    }
})
</script>

<style scoped>
.card__overlay {
    @apply bg-cover bg-no-repeat text-white px-4 relative overflow-hidden;

    ::before {
        content: "";
        @apply absolute inset-0 bg-gradient-to-b from-[#00000020] to-[#00000020] -z-[2]
    }
}
</style>

<template>
    <Card :class="`card__overlay py-6`" :style="`background-image:url('${props?.bgImg}')`">
        <template #title>{{ props.title }}</template>
    </Card>
</template>