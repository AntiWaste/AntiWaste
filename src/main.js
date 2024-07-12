import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios"; // This import is fine for global Axios settings
import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { aliases, fa } from "vuetify/iconsets/fa";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./axios"; // This is your Axios instance with interceptors
import router from "./router";

import FooterView from "@/components/FooterView.vue";
import AboutUs from "@/components/Home/AboutUs.vue";
import FaqQues from "@/components/Home/FaqQues.vue";
import FounderWeb from "@/components/Home/FounderWeb.vue";
import HowTo from "@/components/Home/HowTo.vue";
import TrashCenter from "@/components/Home/TrashCenter.vue";
import TrustUser from "@/components/Home/TrustUser.vue";

import NavTop from "@/components/NavTop.vue";
import CarouselCard from "./components/RecyclePage/CarouselCard.vue";
import CategoriesIcon from "./components/RecyclePage/CategoriesIcon.vue";
import ProductRecycleCard from "./components/RecyclePage/ProductRecycleCard";
import WelcomeCard from "./components/RecyclePage/WelcomeCard.vue";

import store from "@/store/index";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import LetChat from "./components/LetChat.vue";

const app = createApp(App);

axios
  .get("/csrf-token")
  .then((response) => {
    localStorage.setItem("csrf_token", response.data.csrfToken);
  })
  .catch((error) => {
    console.error("Error fetching CSRF token:", error);
  });

// Make the Axios instance available globally
app.config.globalProperties.$axios = axios;

// Initialize Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});

// Register components globally
app.component("nav-top", NavTop);
app.component("welcome-card", WelcomeCard);
app.component("categories-icon", CategoriesIcon);
app.component("carousel-card", CarouselCard);
app.component("let-chat", LetChat);

// Home components
app.component("about-us", AboutUs);
app.component("trash-center", TrashCenter);
app.component("trust-user", TrustUser);
app.component("faq-ques", FaqQues);
app.component("founder-web", FounderWeb);
app.component("how-to", HowTo);
app.component("footer-view", FooterView);

// Register Vuetify components globally if needed
app.component("v-app", components.VApp);
app.component("v-main", components.VMain);
app.component("v-container", components.VContainer);

// Register ProductDetails and ProductRecycle globally
app.component("product-recycle-card", ProductRecycleCard);

// Use plugins and mount the app
app.use(Toast);
app.use(router).use(store).use(vuetify);

// Dispatch fetchUser to rehydrate the user state
store.dispatch('fetchUser').then(() => {
  app.mount("#app");
});
