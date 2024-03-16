<script setup>
import CardMasonry from '@/components/Section/CardMasonry.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { reactive } from 'vue';

const galleryMasonry = reactive([
    {
        sources: [
            {
                src: "https://i.pinimg.com/736x/bc/fd/51/bcfd51b19445435458b2d1e00ec15367.jpg",
                type: "img"
            },
            {
                src: "https://cdn.dribbble.com/userupload/9636053/file/original-4069689db832d3d6fe5daab0e17a1458.png?resize=1024x768",
                type: "img"
            },
        ],
        centerPosition: true
    },
    {
        sources: [
            {
                src: "https://i.pinimg.com/564x/39/4f/53/394f53fdd66e50827b767676cb51727b.jpg",
                type: "img"
            },
            {
                src: "https://i.pinimg.com/564x/c2/7f/56/c27f56fd4ea31b283c23c33cd444c665.jpg",
                type: "img"
            }
        ],
        centerPosition: false
    },
    {
        sources: [
            {
                src: "https://cdn.dribbble.com/userupload/9123980/file/original-352f8c007ee4960bae72a775a4fc68b6.mp4",
                type: "video"
            },
            {
                src: "https://i.pinimg.com/564x/ef/35/f4/ef35f4e4ff92fb094c4feb52d6a26dc6.jpg",
                type: "img"
            },
            {
                src: "https://cdn.dribbble.com/users/418188/screenshots/15428692/media/3efe04c6201a574887f04d186bb1dab7.mp4",
                type: "video"
            }
        ],
        centerPosition: true
    },
    {
        sources: [
            {
                src: "https://cdn.dribbble.com/userupload/8926923/file/original-dbd7448d4f0cdd00b4987a6ad1e63fe4.mp4",
                type: "video"
            },
            {
                src: "https://i.pinimg.com/564x/83/de/b6/83deb6f1b64bd5342f526e2f5f552608.jpg",
                type: "img"
            }
        ],
        centerPosition: false
    },
    {
        sources: [
            {
                src: "https://cdn.dribbble.com/userupload/10150406/file/original-42b0236086885b724bfc66d9296455a4.mp4",
                type: "video"
            },
            {
                src: "https://cdn.dribbble.com/users/139218/screenshots/3531072/media/5c3dc630ca3c3895cc2dedc71b40925d.gif",
                type: "img"
            }
        ],
        centerPosition: true
    },
])
</script>

<style scoped>
section {
    @apply mb-20;
}

.about__heading {
    @apply flex gap-x-8 flex-col md:flex-row items-center md:px-44;

    .heading-1 {
        @apply md:text-4xl lg:text-7xl font-semibold max-w-4xl lg:leading-snug;
    }

    .sub-1 {
        @apply text-lg max-w-[85%] leading-[36px];
    }
}
</style>

<template>
    <MainLayout>
        <template #content>

            <main class="py-12">
                <section class="about__heading">
                    <h1 class="heading-1">Design the Future. Showcase Your Creative Brilliance with
                        UIKitku</h1>
                    <p class="leading-9 sub-1">Our mission is to empower designers worldwide by providing a dynamic
                        online platform to showcase their innovative creations.
                    </p>
                </section>

                <CardMasonry :MasonryContent="galleryMasonry" />
            </main>

        </template>
    </MainLayout>
</template>