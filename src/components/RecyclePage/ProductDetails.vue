<template>
  <div class="bg-gray-50 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        @click="navigateBack"
        class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none mb-4"
      >
        Back
      </button>

      <div
        v-if="product"
        class="p-4 bg-white dark:bg-gray-700 mb-5 rounded-lg shadow-md"
      >
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <!-- IMAGE -->
            <div
              class="h-[460px] rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 mb-4"
            >
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
                Average Rating: {{ product.average_rating }} ({{
                  product.reviews
                }})
              </div>
            </div>
            <div v-else>
              <p class="text-gray-600 mt-4">
                Please log in or register to rate this product.
              </p>
            </div>

            <div class="flex mt-4">
              <div class="mr-6">
                <span class="font-bold text-gray-700">Price:</span>
                <span class="text-gray-600">${{ product.price }}</span>
              </div>
              <div>
                <span class="font-bold text-gray-700">Availability:</span>
                <span class="text-gray-600">In Stock</span>
              </div>
            </div>

            <div class="mt-4">
              <span class="font-bold text-gray-700">Product Description:</span>
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
      <div v-else class="text-center py-8">
        <p class="text-gray-600">Loading product details...</p>
      </div>
      <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-22">
            <h2 class="text-2xl font-bold text-gray-900">Related products</h2>

            <div
              class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
           
            >
              <div class="group relative"  v-for="related in relatedProducts"
              :key="related.id">
                <div
                  class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                >
                  <img
                    :src="related.image || 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg'"
                    alt="Related Product Image"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    {{ related.description }}
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  {{ related.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
const toast = useToast();

export default {
  data() {
    return {
      product: null,
      userRating: null,
      rated: false,
      isLoggedIn: false,
      relatedProducts: null,
    };
  },

  mounted() {
    this.fetchProduct();
    this.checkLoginStatus(); // Check login status when the component mounts
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id;
      axios
        .get(`${API_BASE_URL}products/${productId}`)
        .then((response) => {
          console.log(response.data); // Log response data for debugging
          this.product = response.data;
          this.userRating = this.product.user_rating;
          this.rated = !!this.product.user_rating;
          this.getRelatedProducts(); // Fetch related products after getting the product
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
        });
    },
    getRelatedProducts() {
      if (this.product && this.product.category_id) {
        axios
          .get(`${API_BASE_URL}products/category/${this.product.category_id}`)
          .then((response) => {
            this.relatedProducts = response.data;
            console.log(this.relatedProducts); // Log response data for debugging
          })
          .catch((error) => {
            console.error('Error fetching related products:', error);
          });
      }
    },
    checkLoginStatus() {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      this.isLoggedIn = !!token; // Set isLoggedIn based on token existence
    },
    submitRating(rating) {
      if (this.isLoggedIn && !this.rated) {
        axios
          .post(`${API_BASE_URL}products/${this.product.id}/rate`, { rating })
          .then((response) => {
            this.product.average_rating = response.data.average_rating;
            this.product.reviews = response.data.reviews;
            this.userRating = rating;
            this.rated = true;
          })
          .catch((error) => {
            console.error('Error submitting rating:', error);
          });
      }
    },
    navigateBack() {
      this.$router.go(-1);
    },
    addToCart(product) {
      console.log('Adding to cart:', product);
      const token = localStorage.getItem('auth_token');
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
          toast.success('Product added to cart!'); // Using Vue Toastification for success message
          console.log('Product added to cart:', response.data);
        })
        .catch((error) => {
          toast.error('Failed to add product to cart.'); // Using Vue Toastification for error message
          console.error('Error adding product to cart:', error);
        });
    },
    contactOwner(product) {
      console.log('Contacting owner:', product);
    },
  },
};
</script>
