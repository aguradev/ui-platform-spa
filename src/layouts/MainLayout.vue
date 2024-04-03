<script setup>
import { reactive } from "vue"

import InlineNavbar from "@/components/Navbar/InlineNavbar.vue";
import FooterSection from "@/components/Section/FooterSection.vue";

const navMenu = reactive([
    {
        url: "/",
        label: "Home"
    },
    {
        url: "/about",
        label: "About"
    },
    {
        url: "/",
        label: "Showcase"
    },
    {
        url: "/",
        label: "Contact"
    }
])

</script>

<style scoped>
main.content {
    @apply pt-36 md:pt-0;
}
</style>


<template>
    <InlineNavbar :navItemMenu="navMenu" />

    <main class="content">
        <slot name="content" />
    </main>

    <FooterSection />
</template>