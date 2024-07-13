<template>
  <div class="bg-white border rounded-lg shadow relative m-10">
    <div class="flex items-start justify-between p-5 border-b rounded-t">
      <h3 class="text-2xl font-semibold">Post Your Product now!</h3>
      <!-- Back Button -->
      <div class="px-5 pb-2">
        <button
          @click="navigateBack"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none"
        >
          Back
        </button>
      </div>
    </div>

    <div class="p-6 space-y-6">
      <form @submit.prevent="saveProduct">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="product-name"
              class="text-sm font-medium text-gray-900 block mb-2"
              >Product Name</label
            >
            <input
              v-model="formData.productName"
              type="text"
              name="product-name"
              id="product-name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              placeholder="Kromar Khmer"
              required
            />
          </div>
          <!-- <div class="col-span-6 sm:col-span-3">
            <label
              for="category"
              class="text-sm font-medium text-gray-900 block mb-2"
              >Category</label
            >
            <select
              v-model="formData.category_id"
              id="category"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              required
            >
              <option value="" disabled>Select a category</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div> -->
          <div class="col-span-6 sm:col-span-3">
            <label for="Waste-categories" class="text-sm font-medium text-gray-900 block mb-2">Product categories</label>
            <select
              v-model="formData.categories"
              name="waste-categories"
              id="waste-categories"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              required
            >
              <option value="">Select Waste Category</option>
              <option value="Glass Bottles">Glass Bottles</option>
              <option value="Plastics">Plastics</option>
              <option value="Metals">Metals</option>
              <option value="Papers">Papers</option>
              <option value="E-Waste">E-Waste</option>
              <option value="Textiles">Textiles</option>
            </select>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label
              for="location"
              class="text-sm font-medium text-gray-900 block mb-2"
              >Location</label
            >
            <input
              v-model="formData.location"
              type="text"
              name="location"
              id="location"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="New York, USA"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label
              for="contact-number"
              class="text-sm font-medium text-gray-900 block mb-2"
              >Contact Number</label
            >
            <input
              v-model="formData.contactNumber"
              type="text"
              name="contact-number"
              id="contact-number"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="+1 234 567 890"
              required
            />
          </div>
          <div class="col-span-6">
            <label
              for="product-images"
              class="text-sm font-medium text-gray-900 block mb-2"
              >Product Images</label
            >
            <input
              type="file"
              name="product-images"
              id="product-images"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              @change="onImagesSelected"
              multiple
            />
          </div>

          <!-- Display selected images -->
          <div class="col-span-6" v-if="formData.selectedImages.length > 0">
            <h3 class="text-lg font-medium">Selected Images:</h3>
            <div class="mt-2 grid grid-cols-3 gap-4">
              <div
                v-for="(image, index) in formData.selectedImages"
                :key="index"
                class="relative"
              >
                <img
                  :src="image.url"
                  alt="Selected Image"
                  class="rounded-lg h-32 w-full object-cover"
                />
                <button
                  @click="removeImage(index)"
                  class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                >
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label
              for="price"
              class="text-sm font-medium text-gray-900 block mb-2"
              >Price</label
            >
            <input
              v-model="formData.price"
              type="text"
              name="price"
              id="price"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="00.00$"
              required
            />
          </div>
          <div class="col-span-6">
            <label
              for="product-description"
              class="text-sm font-medium text-gray-900 block mb-2"
              >Product Description</label
            >
            <textarea
              v-model="formData.productDescription"
              id="product-description"
              rows="6"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
              placeholder="Details"
              required
            ></textarea>
          </div>
        </div>
      </form>
    </div>

    <div class="p-6 border-t border-gray-200 rounded-b">
      <button
        class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        @click="saveProduct"
      >
        Post Now
      </button>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { mapGetters } from 'vuex';

const csrfToken = window.csrf_token;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

export default {
  data() {
    return {
      formData: {
        productName: '',
        location: '',
        contactNumber: '',
        productDescription: '',
        selectedImages: [],
        categories: "",
        price: '',
      },
      imgFiles: [],
      categories: [],
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "user"]),
  },
  methods: {
    navigateBack() {
      this.$router.go(-1);
    },
    onImagesSelected(event) {
      this.imgFiles = Array.from(event.target.files);
      this.convertToBase64();
    },
    convertToBase64() {
      const promises = this.imgFiles.map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve({ file, url: e.target.result });
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(promises)
        .then(results => {
          this.formData.selectedImages = results;
        })
        .catch(error => {
          console.error('Error converting files to base64:', error);
        });
    },
    removeImage(index) {
      this.formData.selectedImages.splice(index, 1);
    },
    async saveProduct() {
      const toast = useToast();
      if (
        !this.formData.productName ||
        !this.formData.location ||
        !this.formData.contactNumber ||
        !this.formData.price ||
        !this.formData.productDescription ||
        !this.formData.categories ||
        this.formData.selectedImages.length === 0
      ) {
        toast.error('Please fill in all required fields and select at least one image.');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('name', this.formData.productName);
        formData.append('location', this.formData.location);
        formData.append('contact_number', this.formData.contactNumber);
        formData.append('categories', this.formData.categories);
        formData.append('description', this.formData.productDescription);
        formData.append('price', this.formData.price);

        this.formData.selectedImages.forEach((image, index) => {
          formData.append(`img[${index}]`, image.file);
        });

        const response = await axios.post(`${API_BASE_URL}products`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Response from server:', response.data);

        toast.success('Product saved successfully!');
        this.$router.push('/thank-recycle');
      } catch (error) {
        toast.error('Error saving product. Please try again later.');
        if (error.response) {
          console.error('Server error details:', error.response.data);
        } else {
          console.error('Error:', error.message);
        }
      }
    }
  },
};
</script>