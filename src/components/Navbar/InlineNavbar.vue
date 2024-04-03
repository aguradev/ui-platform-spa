<script setup>
import { RouterLink } from 'vue-router';
import NavListElementVue from '@/elements/NavListElement.vue';
import NavItemElementVue from '@/elements/NavItemElement.vue';
import ResSidebarNavbar from '@/components/Navbar/ResSidebarNavbar.vue';

const props = defineProps({
    navItemMenu: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
.logo {
    @apply font-bold text-lg
}

.navbar {
    @apply text-white bg-gray-900 fixed top-0 z-[999] w-full md:relative md:bg-transparent md:text-gray-900 lg:max-w-[1600px] flex items-center justify-between lg:justify-around mx-auto py-9 px-9;
}

.navbar .wrapper {
    @apply flex gap-x-14 items-center justify-center
}

.btn {
    @apply py-2 px-5 rounded-md block;

    &.btn-login {
        @apply font-bold
    }

    &.btn-register {
        @apply bg-gray-900 text-white;
    }
}
</style>


<template>
    <header>
        <nav class="navbar">
            <div class="logo">
                Untitled UI
            </div>


            <NavListElementVue navClass="hidden lg:flex">
                <template #list-contents>
                    <NavItemElementVue v-for="(item, index) in props.navItemMenu" :key="index">
                        <template #item-content>
                            <RouterLink :to="item.url">{{ item.label }}</RouterLink>
                        </template>
                    </NavItemElementVue>
                </template>
            </NavListElementVue>


            <NavListElementVue navClass="hidden lg:flex">
                <template #list-contents>
                    <NavItemElementVue>
                        <template #item-content>
                            <RouterLink to="#" class="btn btn-login">Log in</RouterLink>
                        </template>
                    </NavItemElementVue>
                    <NavItemElementVue>
                        <template #item-content>
                            <RouterLink to="#" class="btn btn-register">Sign up</RouterLink>
                        </template>
                    </NavItemElementVue>
                </template>
            </NavListElementVue>

            <ResSidebarNavbar position="right" :navData="props.navItemMenu" />
        </nav>
    </header>
</template>