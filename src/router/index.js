import ContactInfo from "../components/Dashboard/DashboardContact.vue";
import EventInfo from "../components/Dashboard/DashboardEvent.vue";
import ProductInfo from "../components/Dashboard/DashboardProduct.vue";
import RecycleInfo from "../components/Dashboard/DashboardRecycle.vue";
import WasteInfo from "../components/Dashboard/DashboardWaste.vue";
import UsersInfo from "../components/Dashboard/UsersInfo.vue";
import HomePage from "../components/Home/HomePage.vue";
import HomeLayout from "../views/HomeLayout.vue";
// import TopBar from '../components/Waste/TopBar.vue';
import EventForm from "@/components/Event/EventForm.vue";
import ListingProduct from "@/components/RecyclePage/ListingProduct.vue";
import ContactUs from "@/views/ContactUs.vue";
import DashboardLayout from "@/views/DashboardLayout.vue";
import EventView from "@/views/EventView.vue";
import WasteView from "@/views/WasteView.vue";
import { createRouter, createWebHistory } from "vue-router";
import CartView from "../components/Cart/CartView.vue";
import DetailPage from "../components/Event/DetailPage.vue";
import EventPost from "../components/Event/EventPost.vue";
import ThankEvent from "../components/Event/ThankYou.vue";
import PostingForm from "../components/RecyclePage/PostingForm.vue";
import ProductDetails from "../components/RecyclePage/ProductDetails.vue";
import ThankRecycle from "../components/RecyclePage/ThankYou.vue";
import SellWaste from "../components/Waste/SellWaste.vue";
import ThankWaste from "../components/Waste/ThankYou.vue";
import WasteListing from "../components/Waste/WasteListing.vue";
import store from "../store";
import RecycleView from "../views/RecycleView.vue";
import SignInView from "../views/auth/SignInView.vue";
import SignupView from "../views/auth/SignupView.vue";
// import CartView from "../components/Cart/CartView.vue";
import { useToast } from 'vue-toastification';

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
  {
    path: "/dashboard-layout",
    name: "dashboard-layout",
    component: DashboardLayout,
    meta: { requiresAdmin: true }
  },
  // {
  //   path: "/post-product",
  //   name: "productform",
  //   component: PostingForm,
  // },
  //Dashboard Layout have children,
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
  {
    path: "/",
    name: "dashboard",
    redirect: "/home",
    component: DashboardLayout,
    children: [
      {
        path: "user-info",
        name: "user-info",
        component: UsersInfo,
      },
      {
        path: "product-info",
        name: "product-info",
        component: ProductInfo,
      },
      {
        path: "contact-info",
        name: "contact-info",
        component: ContactInfo,
      },
      {
        path: "waste-info",
        name: "waste-info",
        component: WasteInfo,
      },
      {
        path: "event-info",
        name: "event-info",
        component: EventInfo,
      },
      {
        path: "recycle-info",
        name: "recycle-info",
        component: RecycleInfo,
      },
    ],
  },
  //Home Layout have children,
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
        path: "thank-recycle",
        name: "thank-recycle",
        component: ThankRecycle,
      },
      {
        path: "thank-waste",
        name: "thank-waste",
        component: ThankWaste,
      },
      {
        path: "thank-event",
        name: "thank-event",
        component: ThankEvent,
      },
      {
        path: "waste-listing",
        name: "waste-listing",
        component: WasteListing,
      },
      {
        path: "waste-form",
        name: "waste-form",
        component: SellWaste,
      },
      {
        path: "event-detail",
        name: "event-detail",
        component: DetailPage,
      },
      {
        path: "event-detail/:id",
        name: "event-detail",
        component: DetailPage,
      },
      {
        path: "event-post",
        name: "event-post",
        component: EventPost,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  const isAdmin = store.getters.isAdmin;

  if (requiresAdmin && !isAdmin) {
    next('/home'); // Redirect to home or another page if not admin
    useToast().error("You don't have permission to view this page")
  } else {
    next();
  }
});

export default router; 