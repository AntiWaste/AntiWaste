import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//import component
import NavTop from "./components/NavTop.vue";
const app = createApp(App);

//add components to 'app'
app.component("nav-top", NavTop);

app.use(router).mount("#app");
