<template>
  <div class="bg-green-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        @click="navigateBack"
        class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none mb-4"
      >
        Back
      </button>

      <div v-if="product" class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <!-- IMAGE -->
            <div class="h-[460px] rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                class="w-full h-full object-cover"
                :src="product.img"
                alt="Product Image"
              />
            </div>

            <!-- ADD TO CART & CONTACT OWNER -->
            <div class="flex -mx-2 mb-4">
              <div class="w-1/2 px-2">
                <button
                  @click="addToCart(product)"
                  class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
              <div class="w-1/2 px-2">
                <button
                  @click="contactOwner(product)"
                  class="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300"
                >
                  Contact Owner
                </button>
              </div>
            </div>
          </div>

          <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              {{ product.name }}
            </h2>

            <div class="flex items-center text-sm text-gray-600 mb-4">
              <span class="mr-1">{{ product.owner_name }}</span>
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>

            <div class="flex items-center mt-2" v-if="isLoggedIn">
              <v-rating
                v-model="userRating"
                color="amber"
                density="compact"
                half-increments
                @input="submitRating"
                v-if="!rated"
              ></v-rating>
              <div v-else class="text-gray-600 ml-4">
                Your Rating: {{ userRating }}
              </div>
              <div class="text-gray-600 ml-4">
                Average Rating: {{ product.average_rating }} ({{ product.reviews }})
              </div>
            </div>
            <div v-else>
              <p class="text-gray-600 mt-4">Please log in or register to rate this product.</p>
            </div>

            <div class="flex mt-4">
              <div class="mr-6">
                <span class="font-bold text-gray-700">Price:</span>
                <span class="text-gray-600">${{ product.price }}</span>
              </div>
            </div>

            <div class="mt-4">
              <span class="font-bold text-gray-700">Description: </span>
              <p class="text-gray-600 text-sm mt-2">
                {{ product.description }}
              </p>
            </div>

            <p class="text-lg font-bold mt-4">
              Location: {{ product.location }}
            </p>

            <p class="text-lg font-bold">
              Contact Number: {{ product.contact_number }}
            </p>
          </div>
        </div>
      </div>

      <LoadingSpinner v-if="product === null" />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { API_BASE_URL } from '@/config';
import axios from 'axios';
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
const toast = useToast();

export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      product: null,
      userRating: null,
      rated: false,
      isLoggedIn: false,
    };
  },
  mounted() {
    this.fetchProduct();
    this.checkLoginStatus(); // Check login status when the component mounts
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id;
      axios.get(`${API_BASE_URL}products/${productId}`)
        .then(response => {
          console.log('Product details:', response.data); // Log response data for debugging
          this.product = response.data;
          this.userRating = this.product.user_rating;
          this.rated = !!this.product.user_rating;
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    },
    checkLoginStatus() {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      this.isLoggedIn = !!token; // Set isLoggedIn based on token existence
    },
    submitRating(rating) {
      if (this.isLoggedIn && !this.rated) {
        axios.post(`${API_BASE_URL}products/${this.product.id}/rate, { rating }`)
          .then(response => {
            this.product.average_rating = response.data.average_rating;
            this.product.reviews = response.data.reviews;
            this.userRating = rating;
            this.rated = true;
          })
          .catch(error => {
            console.error('Error submitting rating:', error);
          });
      }
    },
    navigateBack() {
      this.$router.go(-1);
    },
    addToCart(product) {
      console.log('Adding to cart:', product);
      const token = localStorage.getItem("auth_token");
      axios
        .post(
          `${API_BASE_URL}cart-items`,
          {
            product_id: product.id,
            quantity: 1, // You can adjust the quantity as needed
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.success("Product added to cart!"); // Using Vue Toastification for success message
          console.log("Product added to cart:", response.data);
        })
        .catch((error) => {
          toast.error("Failed to add product to cart."); // Using Vue Toastification for error message
          console.error("Error adding product to cart:", error);
        });
    },
    contactOwner(product) {
      console.log('Contacting owner:', product);
    },
  },
};
</script>