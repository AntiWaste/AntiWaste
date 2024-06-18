import HomeLayout from "../views/HomeLayout.vue";
import HomePage from "../components/Home/HomePage.vue";
// import TopBar from '../components/Waste/TopBar.vue';
import WasteView from "@/views/WasteView.vue";
import ContactUs from "@/views/ContactUs.vue";
import EventView from "@/views/EventView.vue";
import { createRouter, createWebHistory } from "vue-router";
import RecycleView from "../views/RecycleView.vue";
import SignupView from "../views/auth/SignupView.vue";
import SignInView from "../views/auth/SignInView.vue";
import EventForm from "@/components/Event/EventForm.vue";
import ListingProduct from "@/components/RecyclePage/ListingProduct.vue";
import ProductDetails from "../components/RecyclePage/ProductDetails.vue"

const routes = [
  {
    path: "/register",
    name: "register",
    component: SignupView
  },
  {
    path: "/login",
    name: "login",
    component: SignInView
  },
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: HomeLayout,
    children: [
      {
        path: "home",
        name: "home",
        component: HomePage
      },
      {
        path: "recycle",
        name: "recycle",
        component: RecycleView
      },
      {
        path: "waste",
        name: "waste",
        component: WasteView
      },
      {
        path: "event",
        name: "Event",
        component: EventView
      },
      {
        path: "create-event",
        name: "CreateEvent",
        component: EventForm
      },
      {
        path: "contact",
        name: "contact-us",
        component: ContactUs
      },
      {
        path: "listing-product",
        name: "listing-product",
        component: ListingProduct
      },
      {
        path: "product-detail/:id",
        name: "product-detail",
        component: ProductDetails
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
function isAuthenticated() {
  return localStorage.getItem("user");
}

export default router;
