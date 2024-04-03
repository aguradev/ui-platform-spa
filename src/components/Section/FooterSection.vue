<script setup>
import Button from "primevue/button";
</script>

<style scoped>
.footer {
    @apply bg-[#222] text-white py-24 px-8 m-0 lg:m-8 lg:rounded-2xl;

    .footer__header {
        @apply text-center;

        .title {
            @apply mb-8 text-4xl font-bold;
        }

        .subtitle {
            @apply text-xl;
        }
    }

    .footer__cta {
        @apply flex justify-center w-full gap-x-8 mt-14;
    }
}
</style>

<template>
    <section class="max-w-[1600px] mx-auto">
        <footer class="footer">
            <header class="footer__header">
                <h1 class="title">Let's get started sharing your project</h1>
                <p class="subtitle">Join over +4.000 people already have portfolio project with Untitled. </p>
                <div class="footer__cta">
                    <Button label="Get started" class="px-6 py-3 border border-white"></Button>
                    <Button label="Upload your project" class="px-6 py-3 border border-white"></Button>
                </div>
            </header>
        </footer>
    </section>
</template>