<script setup>
import { ref } from 'vue'
import Sidebar from 'primevue/sidebar';
import ButtonPrime from 'primevue/button';
import NavListElementVue from '@/elements/NavListElement.vue';
import NavItemElementVue from '@/elements/NavItemElement.vue';
const visible = ref(false)

const props = defineProps({
    position: {
        type: String,
        default: () => "left"
    },
    navData: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
.nav-list-col {
    @apply flex flex-col items-start gap-y-3 mb-8
}

.btn {
    @apply py-2 px-5 rounded-md block w-full;

    &.btn-login {
        @apply font-bold
    }

    &.btn-register {
        @apply bg-gray-900 text-white;
    }
}
</style>

<template>
    <div class="block lg:hidden">
        <ButtonPrime @click="visible = true" icon="pi pi-bars"></ButtonPrime>
    </div>

    <Sidebar v-model:visible="visible" :position="props.position">
        <NavListElementVue navClass="nav-list-col">
            <template #list-contents>
                <NavItemElementVue v-for="(item, index) in props.navData" :key="index">
                    <template #item-content>
                        <RouterLink :to="item.url">{{ item.label }}</RouterLink>
                    </template>
                </NavItemElementVue>
            </template>
        </NavListElementVue>

        <NavListElementVue navClass="nav-list-col">
            <template #list-contents>
                <NavItemElementVue class="w-full text-center">
                    <template #item-content>
                        <RouterLink to="#" class="btn btn-login">Log in</RouterLink>
                    </template>
                </NavItemElementVue>
                <NavItemElementVue class="w-full text-center">
                    <template #item-content>
                        <RouterLink to="#" class="btn btn-register">Sign up</RouterLink>
                    </template>
                </NavItemElementVue>
            </template>
        </NavListElementVue>
    </Sidebar>
</template>