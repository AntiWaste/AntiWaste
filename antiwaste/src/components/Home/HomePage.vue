<template>
  <v-app>
    <div class="container">
      <v-img
        class="img"
        src="https://www.ptecologicalservices.com/assets/images/products/organicwasteconvertor.gif"
      ></v-img>
    </div>

    <div class="font-weight-bold text-h4 text-center pt-10">Our Clients</div>

    <div class="slider pt-5">
      <p class="text-center">
        We have been working with some community who working on zero waste
      </p>
      <div class="slide-track">
        <div class="slide" v-for="(client, index) in communities" :key="index">
          <img :src="client.img" height="100" width="250" />
        </div>
      </div>

      <p class="text-center pt-5">
        We have been working with some community who working on zero waste
      </p>
    </div>
    <!-- LogoCarousel.vue -->
    <div class="logo-carousel">
      <b-carousel-slide>
        <!-- v-for="(logo, index) in logos" :key="index" -->
        <div class="d-flex">
          <v-img
            src="../../assets/logos/image 38 (1).png"
            alt="Logo"
            class="logo-image"
          ></v-img>
          <v-img
            src="../../assets/logos/image 38 (1).png"
            alt="Logo"
            class="logo-image"
          ></v-img>
          <v-img
            src="../../assets/logos/image 38 (1).png"
            alt="Logo"
            class="logo-image"
          ></v-img>
          <v-img
            src="../../assets/logos/image 38 (1).png"
            alt="Logo"
            class="logo-image"
          ></v-img>
          <v-img
            src="../../assets/logos/image 38 (1).png"
            alt="Logo"
            class="logo-image"
          ></v-img>
          <v-img
            src="../../assets/logos/image 38 (1).png"
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
  </v-app>
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
import AboutUs from '@/components/Home/AboutUs.vue';
import TrashCenter from '../Home/TrashCenter.vue';
import TrustUser from '../Home/TrustUser.vue';
import FaqQues from './FaqQues.vue';
import FounderWeb from './FounderWeb.vue';
import RecycleView from './RecycleView.vue';
import axios from 'axios';
export default {
  components: {
    TrashCenter,
    FaqQues,
    AboutUs,
    TrustUser,
    RecycleView,
    FounderWeb,
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const token = localStorage.getItem('token');
    if (token) {
      await axios
        .get('user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.user = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
