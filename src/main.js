import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { aliases, fa } from 'vuetify/iconsets/fa';
import App from './App.vue';
import './assets/tailwind.css';
import './axios';
import router from './router';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

// import { Cloudinary } from "cloudinary-vue";

// import "vuetify/styles";

import FooterView from '@/components/FooterView.vue';
import AboutUs from '@/components/Home/AboutUs.vue';
import FaqQues from '@/components/Home/FaqQues.vue';
import FounderWeb from '@/components/Home/FounderWeb.vue';
import HowTo from '@/components/Home/HowTo.vue';
import TrashCenter from '@/components/Home/TrashCenter.vue';
import TrustUser from '@/components/Home/TrustUser.vue';


//import component
import NavTop from '@/components/NavTop.vue';
import CarouselCard from './components/RecyclePage/CarouselCard.vue';
import CategoriesIcon from './components/RecyclePage/CategoriesIcon.vue';
import ProductRecycleCard from './components/RecyclePage/ProductRecycleCard';
import WelcomeCard from './components/RecyclePage/WelcomeCard.vue';



// Import Vuetify components and directives if needed
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import LetChat from './components/LetChat.vue';
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
app.component('let-chat', LetChat);


//home components

app.component('about-us', AboutUs);
app.component('trash-center', TrashCenter);
app.component('trust-user', TrustUser);
app.component('faq-ques', FaqQues);
app.component('founder-web', FounderWeb);
app.component('how-to', HowTo);
app.component('footer-view', FooterView);



// Register components
app.component('v-app', components.VApp);
app.component('v-main', components.VMain);
app.component('v-container', components.VContainer);



// Register ProductDetails and ProductRecycle globally
app.component('product-recycle-card', ProductRecycleCard);


app.use(router).use(vuetify).mount('#app');