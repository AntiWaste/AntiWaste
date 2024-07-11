<template>
  <div id="app">
    <template v-if="isLoading">
      <LoadingSpinner />
    </template>
    <template v-else>
      <v-card class="mx-auto" max-height="435">
        <v-img
          class="text-white flex justify-center items-center"
          height="435"
          src="../../assets/recycledproduct/image_cover.jpg"
          cover
        >
          <div id="welcomeText" class="flex flex-col justify-center items-center">
            <div class="text-5xl font-bold mb-3">Welcome to our Recycle Product Marketplace!</div>
            <div class="text-xl text-center">
              Got recyclable items you want to sell? Post them here easily and reach buyers who appreciate the value of sustainability.
              <br/>Join us in making a difference. Start exploring and contributing to a greener future today!
            </div>
            <router-link to="/product-post">
              <button class="mt-4 px-4 py-2 text-lg font-bold bg-green-600 border rounded-lg text-green-100 hover:bg-green-800 hover:text-white focus:outline-none">
                Sell Now
              </button>
            </router-link>
          </div>
        </v-img>
      </v-card>
    </template>
  </div>
</template>

<script>
import LoadingSpinner from '../LoadingSpinner.vue';

export default {
  name: 'WelcomeCard',
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: true, // Simulate loading state
    };
  },
  mounted() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false after some delay (e.g., fetching data)
    }, 2000); // Adjust delay as needed
  },
};
</script>
