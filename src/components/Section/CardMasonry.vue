<script setup>
const props = defineProps({
    MasonryContent: Array
})

const { MasonryContent } = props

</script>

<style scoped>
.card__masonry {
    @apply flex items-stretch flex-nowrap gap-6 m-5;

    .card__wrapper {
        @apply flex flex-col gap-4 w-1/4;

        .card {
            @apply rounded-md overflow-hidden;

            img,
            video {
                @apply w-full h-auto object-cover;
            }
        }
    }
}
</style>

<template>
    <div class="card__masonry">
        <div v-for="(item, i) in MasonryContent" :key="i" class="card__wrapper" :class="{
            'self-center': item.centerPosition
        }">
            <div class="card" v-for="(source, j) in item.sources" :key="j">
                <div v-if="source.type == 'img'">
                    <img :src="source.src" />
                </div>
                <div v-else>
                    <video :src="source.src" autoplay loop muted></video>
                </div>
            </div>
        </div>
    </div>
</template>