<template>
  <div class="max-w-4xl mx-auto p-4">
    <button @click="navigateBack" class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none">
      Back
    </button>
    <div v-if="product" class="mt-4 p-4 bg-white rounded-lg shadow-md">
      <img
        class="object-cover h-64 w-full rounded-lg"
        :src="require(`../../assets/recycledproduct/${product.image}`)"
        alt="Product Image"
      />
      <div class="p-4">
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>
        <div class="flex items-center text-sm text-gray-600">
          <span class="me-1">{{ product.store }}</span>
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
          <div class="text-gray-600 ms-4">{{ product.rating }} ({{ product.reviews }})</div>
        </div>
        <p class="text-sm text-gray-600 mt-2">Location: {{ product.location }}</p>
        <p class="text-sm text-gray-600">Contact Number: {{ product.contact }}</p>
        <hr class="my-4">
        <div class="text-lg font-semibold">${{ product.price }}</div>
        <p class="text-gray-700 mt-4">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    const productId = this.$route.params.id;
    // Fetch product data by ID (here, we'll use a static example)
    this.product = {
      id: productId,
      title: "Toothbrush Holder",
      store: "Hannah's Store",
      rating: 4.5,
      reviews: 413,
      location: "Preah Vihear",
      contact: "012207047",
      price: 4.5,
      image: "image 34.png",
      description: "This is a detailed description of the product.",
    };
  },
  methods: {
    navigateBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* Add scoped styles here */
</style>
