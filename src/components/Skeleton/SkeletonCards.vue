<script setup>
import CardContent from '@/elements/Card/CardContent.vue';
import CardElement from '@/elements/Card/CardElement.vue';
import CardHeader from '@/elements/Card/CardHeader.vue';
import Skeleton from 'primevue/skeleton';
</script>

<template>
    <CardElement>
        <template #card__header>
            <CardHeader>
                <template #header__content>
                    <Skeleton height="16rem" />
                </template>
            </CardHeader>
        </template>

        <template #card__content>
            <CardContent class="grid gap-y-2">
                <template #body__content>
                    <Skeleton height="1.2rem" />
                    <Skeleton height="1.2rem" width="50%" />
                </template>
            </CardContent>
        </template>
    </CardElement>
</template>
