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

// Register components
app.component("v-app", components.VApp);
app.component("v-main", components.VMain);
app.component("v-container", components.VContainer);

app.use(router).use(vuetify).mount("#app");
