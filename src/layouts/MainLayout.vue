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


<template>
    <InlineNavbar :navItemMenu="navMenu" />
    <slot name="content" />

    <FooterSection />
</template>