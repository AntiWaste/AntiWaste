import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";

// import "vuetify/styles";

//import component
import NavTop from "./components/NavTop.vue";
import WelcomeCard from "./components/RecyclePage/WelcomeCard.vue";

// Import Vuetify components and directives if needed
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

//add components to 'app'
app.component("nav-top", NavTop);
app.component("welcome-card", WelcomeCard);
// Register components
app.component("v-app", components.VApp);
app.component("v-main", components.VMain);
app.component("v-container", components.VContainer);

app.use(router).use(vuetify).mount("#app");
