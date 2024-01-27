import CarouselCard from '@/components/HomePage/CarouselCard.vue';
import ContactUs from '@/views/ContactUs.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/pages/LoginView.vue';
import RegisterView from '../views/pages/RegisterView.vue';
import RecycleView from '../views/RecycleView.vue';
import AboutView from '../views/AboutView.vue';
import FormView from '../views/pages/FormView.vue';
import SignInView from '../views/pages/SignInView.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/form',
    name: 'form',
    component: FormView,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
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
    component: AboutView,
  },
  {
    path: '/recycle',
    name: 'recycle',
    component: RecycleView,
    meta: { requiresAuth: true },
  },
  {
    path: '/event',
    name: 'event',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/404Page.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
function isAuthenticated() {
  return localStorage.getItem('user');
}

export default router;
