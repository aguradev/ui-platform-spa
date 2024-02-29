<script setup>
import Card from "primevue/card"
</script>

<style scoped>
.__card {
    @apply overflow-hidden border-transparent bg-transparent;
    box-shadow: none;
}
</style>

<template>
    <Card class="__card">
        <template #header>
            <slot name="card__header" />
        </template>
        <template #title>
            <slot name="card__title" />
        </template>
        <template #subtitle>
            <slot name="card__subtitle" />
        </template>
        <template #content>
            <slot name="card__content" />
        </template>
        <template #footer>
            <slot name="card__footer" />
        </template>
    </Card>
</template>