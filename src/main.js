import "primevue/resources/themes/aura-light-noir/theme.css";
import "@/assets/base.css";
import "@/assets/main.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  pt: {
    Card: {
      body: "p-0 z-10",
    },
    Image: {
      root: {
        class: ["relative overflow-hidden"],
      },
      image: {
        class: ["rounded-md"],
      },
    },
  },
});

app.mount("#app");
