<<<<<<< HEAD
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';

loadFonts();

createApp(App).use(router).use(vuetify).mount('#app');
=======
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files
import { aliases, fa } from "vuetify/iconsets/fa";

// import "vuetify/styles";

//import component
import NavTop from "./components/NavTop.vue";
import WelcomeCard from "./components/RecyclePage/WelcomeCard.vue";
import CategoriesIcon from "./components/RecyclePage/CategoriesIcon.vue";
import CarouselCard from "./components/RecyclePage/CarouselCard.vue";
import ProductRecyleCard from "./components/RecyclePage/ProductRecycleCard";

// Import Vuetify components and directives if needed
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const app = createApp(App);

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

//add components to 'app'
app.component("nav-top", NavTop);
app.component("welcome-card", WelcomeCard);
app.component("categories-icon", CategoriesIcon);
app.component("carousel-card", CarouselCard);
app.component("product-recyle-card", ProductRecyleCard);

// Register components
app.component("v-app", components.VApp);
app.component("v-main", components.VMain);
app.component("v-container", components.VContainer);

app.use(router).use(vuetify).mount("#app");
>>>>>>> main
