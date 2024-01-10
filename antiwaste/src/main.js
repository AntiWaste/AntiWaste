import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

createApp(App).use(router).use(vuetify).mount('#app');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//import component
import NavTop from './components/NavTop.vue';
const app = createApp(App);

//add components to 'app'
app.component('nav-top', NavTop);

app.use(router).mount('#app');
