<template>
    <div class="bg-white border rounded-lg shadow relative m-10">
      <div class="flex items-start justify-between p-5 border-b rounded-t">
        <h3 class="text-2xl font-semibold">
          Post Your Waste now!
        </h3>
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
              <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">Waste Categories</label>
              <input
                v-model="formData.productName"
                type="text"
                name="product-name"
                id="product-name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                placeholder="Paper"
                required
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="owner" class="text-sm font-medium text-gray-900 block mb-2">Owner</label>
              <input
                v-model="formData.owner"
                type="text"
                name="owner"
                id="owner"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                placeholder="Srey Sros"
                required
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="location" class="text-sm font-medium text-gray-900 block mb-2">Location</label>
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
              <label for="contact-number" class="text-sm font-medium text-gray-900 block mb-2">Contact Number</label>
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
              <label for="product-image" class="text-sm font-medium text-gray-900 block mb-2">Waste Image</label>
              <input
                type="file"
                name="product-image"
                id="product-image"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                @change="onImageSelected"
                required
              />
            </div>
            <div class="col-span-6">
              <label for="product-description" class="text-sm font-medium text-gray-900 block mb-2">Waste Description</label>
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
  import { useToast } from 'vue-toastification';

  
  export default {
    data() {
      return {
        formData: {
          productName: '',
          owner: '',
          location: '',
          contactNumber: '',
          productImage: null,
          productDescription: ''
        }
      };
    },
    methods: {
      navigateBack() {
        this.$router.go(-1); // Navigate back to previous page
      },
      onImageSelected(event) {
        const file = event.target.files[0];
        if (file) {
          this.formData.productImage = URL.createObjectURL(file);
        }
      },
      submitForm() {
        // Handle form submission logic
        console.log('Submitting form:', this.formData);
      },
      saveProduct() {
        // Perform form validation
        if (
          !this.formData.productName ||
          !this.formData.owner ||
          !this.formData.location ||
          !this.formData.contactNumber ||
          !this.formData.productImage ||
          !this.formData.productDescription
        ) {
          const toast = useToast();
          toast.error('Please fill in all required fields.');
          return;
        }
  
        // Handle save product logic
        console.log('Saving product:', this.formData);
        const toast = useToast();
        toast.success('Product saved successfully!');
        this.$router.push('/thank-you'); // Navigate to the Thank You page
      }
    }
  };
  </script>
  
  <style>
  /* Add any additional styles here */
  </style>
  