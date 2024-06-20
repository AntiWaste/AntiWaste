<template>
  <div class="bg-green-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        @click="navigateBack"
        class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none"
      >
        Back
      </button>
      <div v-if="product" class="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                class="w-full h-full object-cover"
                :src="productImage"
                alt="Product Image"
              />
            </div>
            <div class="flex -mx-2 mb-4">
              <!-- <div class="w-1/2 px-2">
                <button
                  class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
              <div class="w-1/2 px-2">
                <button
                  class="w-full bg-gray-200 text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 "
                >
                  Contact to Owner
                </button>
              </div> -->
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold text-gray-800  mb-2">{{ product.title }}</h2>
            <div class="flex items-center text-sm text-gray-600  mb-4">
              <span class="mr-1">{{ product.store }}</span>
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>
            <div class="flex items-center mt-2">
              <v-rating
                :model-value="product.rating"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>
              <div class="text-gray-600  ml-4">{{ product.rating }} ({{ product.reviews }})</div>
            </div>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold text-gray-700 ">Price:</span>
                <span class="text-gray-600 ">${{ product.price }}</span>
              </div>
              <div>
                <span class="font-bold text-gray-700 ">Availability:</span>
                <span class="text-gray-600 ">In Stock</span>
              </div>
            </div>
            <div>
              <span class="font-bold text-gray-700 ">Product Description:</span>
              <p class="text-gray-600  text-sm mt-2">{{ product.description }}</p>
            </div>
            <p class="text-lg font-bold   mt-2">Location: {{ product.location }}</p>
            <p class="text-lg font-bold  ">Contact Number: {{ product.contact }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: null,
    };
  },
  computed: {
    productImage() {
      // Handle null case to avoid errors
      if (!this.product) return null;
      return require(`../../assets/recycledproduct/${this.product.image}`);
    },
  },
  mounted() {
    const productId = this.$route.params.id;
    // Replace with your actual API endpoint
    axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
      .then(response => {
        this.product = response.data; // Assuming your API response contains product data
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  },
  methods: {
    navigateBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>
