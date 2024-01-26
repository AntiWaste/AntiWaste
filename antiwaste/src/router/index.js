import HomePage from '@/components/Home/HomePage.vue';
import TopBar from '@/components/HomePage/TopBar.vue';
import ContactUs from '@/views/ContactUs.vue';
import EventView from '@/views/EventView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/pages/LoginView.vue';
const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/contact',
    name: 'contactus',
    component: ContactUs,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/trash',
    name: 'Home',
    component: TopBar,
  },
  {
    path:'/event',
    name: 'Event',
    component: EventView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
