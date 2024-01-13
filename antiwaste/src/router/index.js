import CarouselCard from '@/components/HomePage/CarouselCard.vue';
import ContactUs from '@/views/ContactUs.vue';
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
    component: CarouselCard,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
