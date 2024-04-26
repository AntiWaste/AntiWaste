import HomePage from '@/components/Home/HomePage.vue';
import TopBar from '../components/Waste/TopBar.vue';
import ContactUs from '@/views/ContactUs.vue';
import EventView from '@/views/EventView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RecycleView from '../views/RecycleView.vue';
import SignupView from '../views/pages/SignupView.vue';
import SignInView from '../views/pages/SignInView.vue';

const routes = [
  {
    path: '/register',
    name: 'register',
    component: SignupView,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView,
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
    path: '/recycle',
    name: 'recycle',
    component: RecycleView,
  },
  {
    path: '/waste',
    name: 'waste',
    component: TopBar,
  },
  {
    path: '/event',
    name: 'Event',
    component: EventView,
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
