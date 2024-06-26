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
import store from '../store';
import PostingForm from "../components/RecyclePage/PostingForm.vue";
import ThankYou from "../components/RecyclePage/ThankYou.vue";
import WasteListing from '../components/Waste/WasteListing.vue'
import SellWaste from '../components/Waste/SellWaste.vue'
import DetailPage from '../components/Event/DetailPage.vue';
import EventPost from '../components/Event/EventPost.vue'

const routes = [
  {
    path: "/register",
    name: "register",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: SignInView,
  },
  // {
  //   path: "/post-product",
  //   name: "productform",
  //   component: PostingForm,
  // },
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: HomeLayout,
    children: [
      {
        path: "home",
        name: "home",
        component: HomePage,
      },
      {
        path: "recycle",
        name: "recycle",
        component: RecycleView,
      },
      {
        path: "waste",
        name: "waste",
        component: WasteView,
      },
      {
        path: "event",
        name: "Event",
        component: EventView,
      },
      {
        path: "create-event",
        name: "CreateEvent",
        component: EventForm,
      },
      {
        path: "contact",
        name: "contact-us",
        component: ContactUs,
      },
      {
        path: "listing-product",
        name: "listing-product",
        component: ListingProduct,
      },
      {
        path: "product-detail/:id",
        name: "product-detail",
        component: ProductDetails,
      },
      {
        path: "product-post",
        name: "product-post",
        component: PostingForm,
      },
      {
        path: "thank-you",
        name: "thank-you",
        component: ThankYou  
      },
      {
        path: "waste-listing",
        name: "waste-listing",
        component: WasteListing  
      },
      {
        path: "waste-form",
        name: "waste-form",
        component: SellWaste 
      },
      {
        path: "event-detail",
        name: "event-detail",
        component: DetailPage
      },
      {
        path: "event-post",
        name: "event-post",
        component: EventPost
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = store.getters.isAuthenticated;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
