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
      <form @submit.prevent="saveWaste">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="Waste-name" class="text-sm font-medium text-gray-900 block mb-2">Waste Name</label>
            <input
              v-model="formData.WasteName"
              type="text"
              name="Waste-name"
              id="Waste-name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              placeholder="Kromar Khmer"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="Waste-categories" class="text-sm font-medium text-gray-900 block mb-2">Waste Categories</label>
            <input
              v-model="formData.WasteCategories"
              type="text"
              name="Waste-categories"
              id="Waste-categories"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              placeholder="Textiles"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="owner" class="text-sm font-medium text-gray-900 block mb-2">Seller</label>
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
          <div class="col-span-6 sm:col-span-3">
            <label for="amount" class="text-sm font-medium text-gray-900 block mb-2">Amount</label>
            <input
              v-model="formData.itemAmount"
              type="text"
              name="amount"
              id="amount"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="1 kg"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Price</label>
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
            <label for="Waste-images" class="text-sm font-medium text-gray-900 block mb-2">Waste Images</label>
            <input
              type="file"
              name="Waste-images"
              id="Waste-images"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              @change="onImagesSelected"
              multiple
            />
          </div>

          <!-- Display selected images -->
          <div class="col-span-6" v-if="formData.selectedImages.length > 0">
            <h3 class="text-lg font-medium">Selected Images:</h3>
            <div class="mt-2 grid grid-cols-3 gap-4">
              <div v-for="(image, index) in selectedImages" :key="index" class="relative">
                <img :src="image.url" alt="Selected Image" class="rounded-lg h-32 w-full object-cover">
                <button @click="removeImage(index)" class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-6">
            <label for="Waste-description" class="text-sm font-medium text-gray-900 block mb-2">Waste Description</label>
            <textarea
              v-model="formData.WasteDescription"
              id="Waste-description"
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
        @click="saveWaste"
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

export default {
  data() {
    return {
      formData: {
        WasteName: '',
        owner: '',
        location: '',
        contactNumber: '',
        itemAmount:'',
        WasteCategories:'',
        price:'',
        WasteDescription: '',
        selectedImages: []
      },
      imageFiles:[]
    };
  },
  methods: {
    navigateBack() {
      this.$router.go(-1); // Navigate back to previous page
    },
    onImagesSelected(event) {
      this.imageFiles = Array.from(event.target.files);
      this.convertToBase64();
      // this.selectedImages = [];
      // Array.from(event.target.files).forEach(file => {
      //   const reader = new FileReader();
      //   reader.onload = () => {
      //     this.formData.selectedImages.push({ file, url: reader.result });
      //   };
      //   reader.readAsDataURL(file);
      // });
    },
    removeImage(index) {
      this.formData.selectedImages.splice(index, 1);  // Remove image from selectedImages array
    },
    convertToBase64() {
      const promises = this.imageFiles.map(file => {
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
    async saveWaste() {
      // Perform form validation
      const toast = useToast();
      // if (
      //   !this.formData.WasteName ||
      //   !this.formData.owner ||
      //   !this.formData.WasteCategories ||
      //   !this.formData.location ||
      //   !this.formData.contactNumber ||
      //   !this.formData.itemAmount ||
      //   !this.formData.price ||
      //   !this.formData.WasteDescription
      // ) {
      //   toast.error('Please fill in all required fields and select at least one image.');
      //   return;
      // }
      try {
        const formData = new FormData();
        formData.append('name', this.formData.WasteName);
        formData.append('owner', this.formData.owner);
        formData.append('price', this.formData.price);
        formData.append('categories', this.formData.WasteCategories);
        formData.append('contact_number', this.formData.contactNumber);
        formData.append('location', this.formData.eventLocation);
        formData.append('item_amount', this.formData.itemAmount);
        formData.append('description', this.formData.eventDescription);

        this.formData.selectedImages.forEach((image, index) => {
          formData.append(`waste_images[${index}]`, image.file);
        });

        await axios.post(`${API_BASE_URL}wastes`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Waste saved successfully!');
        this.$router.push('/thank-you');
      } catch (error) {
        toast.error('Error saving event. Please try again later.');
        if (error.response) {
          console.error('Server error details:', error.response.data);
        }
      }
    }
  }
};
</script>

<style>
/* Add any additional styles here */
</style>
