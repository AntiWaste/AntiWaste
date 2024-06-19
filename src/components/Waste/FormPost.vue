<template>
  <div class="bg-white border rounded-lg shadow relative m-10">
    <div class="flex items-start justify-between p-5 border-b rounded-t">
      <h3 class="text-xl font-semibold">
        Edit product
      </h3>
      <button
        type="button"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        @click="toggleModal('product-modal')"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <div class="p-6 space-y-6">
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
            <input
              v-model="formData.productName"
              type="text"
              name="product-name"
              id="product-name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="Apple Imac 27”"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Category</label>
            <input
              v-model="formData.category"
              type="text"
              name="category"
              id="category"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="Electronics"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="brand" class="text-sm font-medium text-gray-900 block mb-2">Brand</label>
            <input
              v-model="formData.brand"
              type="text"
              name="brand"
              id="brand"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="Apple"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="price" class="text-sm font-medium text-gray-900 block mb-2">Price</label>
            <input
              v-model="formData.price"
              type="number"
              name="price"
              id="price"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="$2300"
              required
            />
          </div>
          <div class="col-span-full">
            <label for="product-details" class="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
            <textarea
              v-model="formData.productDetails"
              id="product-details"
              rows="6"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
              placeholder="Details"
            ></textarea>
          </div>
        </div>
      </form>
    </div>

    <div class="p-6 border-t border-gray-200 rounded-b">
      <button
        class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        @click="saveProduct"
      >
        Save all
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        productName: '',
        category: '',
        brand: '',
        price: '',
        productDetails: ''
      }
    };
  },
  methods: {
    toggleModal(modalName) {
      // Handle modal toggle logic
      console.log('Toggling modal:', modalName);
    },
    submitForm() {
      // Handle form submission logic
      console.log('Submitting form:', this.formData);
    },
    saveProduct() {
      // Handle save product logic
      console.log('Saving product:', this.formData);
    }
  }
};
</script>