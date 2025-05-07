import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import "./style.css";
import App from "./App.vue";
import { provideSnackbar } from "./composables/useSnackbar";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

// Register global snackbar service
app.provide("snackbar", provideSnackbar);

app.use(router).mount("#app");
