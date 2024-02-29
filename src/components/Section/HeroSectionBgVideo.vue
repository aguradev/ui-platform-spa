<script setup>
await new Promise(res => setTimeout(res, 2000))

const props = defineProps({
    videoURL: String,
    thumbnailURL: String
})

</script>

<style scoped>
.hero {
    @apply bg-bottom min-h-[850px] lg:m-9 lg:mt-0 p-8 lg:rounded-xl overflow-hidden relative grid items-end before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black before:z-[5] before:opacity-75;

    .video-bg {
        @apply absolute top-0 left-0 min-h-full min-w-full object-cover
    }

    .hero-content {
        @apply lg:max-w-[1300px] z-[99];

        .section-text {
            @apply text-white mb-4 text-base font-bold;
        }

        .title {
            @apply text-2xl lg:text-6xl lg:leading-normal text-white font-semibold mb-6;
        }

        .subtitle {
            @apply text-sm md:text-base leading-loose lg:text-lg text-white
        }
    }
}
</style>

<template>
    <section class="hero">

        <video :src="props.videoURL" autoplay loop muted class="video-bg" :poster="props.thumbnailURL"></video>

        <div class="hero-content">
            <p class="section-text">Featured</p>
            <h1 class="title">Breaking Into Product Design : Advice from untitled Founder, Nadya</h1>
            <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem officiis aliquam
                obcaecati odio voluptate dolores eligendi laboriosam, incidunt asperiores a eius sed deserunt blanditiis
                illo
                fuga?
                Earum, delectus nobis.</p>
        </div>
    </section>
</template>