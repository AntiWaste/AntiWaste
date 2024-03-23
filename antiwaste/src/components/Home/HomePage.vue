<template>
  <div>
    <v-img
      class="img"
      src="https://www.ptecologicalservices.com/assets/images/products/organicwasteconvertor.gif"
    ></v-img>
  </div>
  <div class="font-weight-bold text-h4 text-center pt-10">Our Client</div>

  <p class="text-center pt-5">
    We have been working with some community who working on zero waste
  </p>
  <!-- LogoCarousel.vue -->
  <div class="logo-carousel">
    <b-carousel-slide>
      <!-- v-for="(logo, index) in logos" :key="index" -->
      <div class="d-flex">
        <a
          href="https://www.bing.com/search?q=ecobatt+engery&cvid=57a09854e068478eac570fdb42407067&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQNIBCDMzMTRqMGo0qAIAsAIA&FORM=ANAB01&PC=U531"
          target="_blank"
        >
          <v-img
            src="../../assets/logos/image 38 (1).png"
            alt="Logo"
            class="logo-image"
          ></v-img>
        </a>
        <a
          href="https://www.bing.com/search?q=clean+green+cambodia&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=clean+green+cambod&sc=10-18&sk=&cvid=735EA628329C4D7BAD7D56026AB2D785&ghsh=0&ghacc=0&ghpl="
          target="_blank"
        >
          <v-img
            src="../../assets/logos/image 39 (1).png"
            alt="Logo"
            class="logo-image"
          ></v-img>
        </a>
        <a href="http://www.gogreen.org/">
          <v-img
            src="../../assets/event/image 40 (2).png"
            alt="Logo"
            class="logo-image"
          ></v-img>
        </a>
        <v-img
          src="../../assets/event/image 41 (2).png"
          alt="Logo"
          class="logo-image"
        ></v-img>
        <v-img
          src="../../assets/event/image 42 (2).png"
          alt="Logo"
          class="logo-image"
        ></v-img>
        <v-img
          src="../../assets/event/image 43 (2).png"
          alt="Logo"
          class="logo-image"
        ></v-img>
        <!-- <v-img src="../../assets/event/image 44 (1).png" alt="Logo" class="logo-image"></v-img> -->
        <v-img
          src="../../assets/logos/image 45.png"
          alt="Logo"
          class="logo-image"
        ></v-img>
        <v-img
          src="../../assets/logos/image 46.png"
          alt="Logo"
          class="logo-image"
        ></v-img>
        <v-img
          src="../../assets/logos/image 47.png"
          alt="Logo"
          class="logo-image"
        ></v-img>
      </div>
    </b-carousel-slide>
  </div>
  <TrashCenter />
  <AboutUs />
  <TrustUser />
  <RecycleView />
  <FounderWeb />
  <FaqQues />
  <FooterVeiw />
</template>

<style scoped>
.logo-carousel {
  display: flex;
  max-width: 600px;
  /* Adjust the maximum width of the carousel */
  margin: auto;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
}

.logo-image {
  display: flex;
  width: 250px;
  height: 100px;
  margin-right: 10px;
}
</style>

<script>
import AboutUs from "@/components/Home/AboutUs.vue";
import TrashCenter from "../Home/TrashCenter.vue";
import TrustUser from "../Home/TrustUser.vue";
import FaqQues from "./FaqQues.vue";
import FounderWeb from "./FounderWeb.vue";
import RecycleView from "./RecycleView.vue";
// import axios from "axios";
import FooterVeiw from "../FooterView.vue";
export default {
  components: {
    TrashCenter,
    FaqQues,
    AboutUs,
    TrustUser,
    RecycleView,
    FounderWeb,
    FooterVeiw,
  },
};
</script>
