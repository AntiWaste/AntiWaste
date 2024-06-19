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
            <div class="text-4xl font-bold mb-3">Welcome to AntiWaste Recycling’s Store</div>
            <div class="text-h6">
              Please enjoy buying our product, feel free to deliver to other provinces too.
            </div>
            <router-link to="/listing-product">
              <button class="mt-2 px-4 py-2 text-lg font-bold bg-green-600 border rounded-lg text-green-100 hover:bg-green-800 hover:text-white focus:outline-none">
                Buy Now
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
