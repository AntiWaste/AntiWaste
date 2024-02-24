import App from './App.vue';
import { createApp } from 'vue';
import 'vuetify/dist/vuetify.min.css';
import router from './router';
import { createVuetify } from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css';
import { aliases, fa } from 'vuetify/iconsets/fa';
import './axios';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

// import { Cloudinary } from "cloudinary-vue";

// import "vuetify/styles";

//import component
import NavTop from './components/NavTop.vue';
import WelcomeCard from './components/RecyclePage/WelcomeCard.vue';
import CategoriesIcon from './components/RecyclePage/CategoriesIcon.vue';
import CarouselCard from './components/RecyclePage/CarouselCard.vue';
import ProductRecyleCard from './components/RecyclePage/ProductRecycleCard';

// Import Vuetify components and directives if needed
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});
// app.use(Cloudinary, {
//   configuration: {
//     cloudName: "dbuzmmqyh",
//     apiKey: "593593823476781",
//   },
// });
// const storage = new CloudinaryStorage({
//   Cloudinary,
//   params: {
//     folder: "YelpCamp",
//     allowedFormats: ["jpeg", "png", "jpg"],
//   },
// });
// module.exports = {
//   Cloudinary, //what we've configure
//   storage,
// };
//add components to 'app'
app.component('nav-top', NavTop);
app.component('welcome-card', WelcomeCard);
app.component('categories-icon', CategoriesIcon);
app.component('carousel-card', CarouselCard);
app.component('product-recyle-card', ProductRecyleCard);

// Register components
app.component('v-app', components.VApp);
app.component('v-main', components.VMain);
app.component('v-container', components.VContainer);

app.use(router).use(vuetify).mount('#app');
