<script setup>
const props = defineProps({
    navClass: {
        type: String,
        default: ""
    }
})
</script>

<style scoped>
.nav-list {
    @apply gap-x-8 items-center
}
</style>
<template>
    <ul :class="`nav-list ${props.navClass}`">
        <slot name="list-contents" />
    </ul>
</template>