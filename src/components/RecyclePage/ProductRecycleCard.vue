<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-8 px-20 py-5">
    <!-- Replace this section with a v-for loop based on items or IDs -->
    <div v-for="item in items" :key="item.id" class="w-auto overflow-hidden rounded-xl border">
      <!-- <template v-if="loading">
        <div class="w-full h-4 bg-green-500 animate-pulse"></div>
      </template> -->

      <img
        class="object-cover h-64 w-full"
        :src="require(`../../assets/recycledproduct/${item.image}`)"
        alt="Product Image"
      />

      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ item.title }}</h3>

        <div class="flex items-center text-sm text-gray-600">
          <span class="me-1">{{ item.store }}</span>
          <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
        </div>

        <div class="flex items-center mt-2">
          <v-rating
            :model-value="item.rating"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>
          <div class="text-gray-600 ms-4">{{ item.rating }} ({{ item.reviews }})</div>
        </div>

        <p class="text-sm text-gray-600 mt-2">Location: {{ item.location }}</p>
        <p class="text-sm text-gray-600">Contact Number: {{ item.contact }}</p>

        <hr class="my-4">

        <div class="text-lg font-semibold">${{ item.price }}</div>

        <div>
          <!-- <button
            class="mt-2 px-4 py-2 text-sm text-green-600 border border-green-600 rounded-lg hover:bg-green-100 focus:outline-none"
            @click="reserve(item.id)"
            :disabled="loading"
          >
            {{ loading ? 'Reserving...' : 'Contact Owner' }}
          </button> -->
          <router-link :to="'/details/' + item.id">
            <button class="mt-2 px-4 py-2 text-sm text-green-600 border border-green-600 rounded-lg hover:bg-green-100 focus:outline-none">View Detail</button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- End of v-for loop -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [
        {
          id: 1,
          title: "Toothbrush Holder",
          store: "Hannah's Store",
          rating: 4.5,
          reviews: 413,
          location: "Preah Vihear",
          contact: "012207047",
          price: 4.5,
          image: "image 34.png",
        },
        {
          id: 2,
          title: "Toothbrush Holder",
          store: "Hannah's Store",
          rating: 4.5,
          reviews: 413,
          location: "Preah Vihear",
          contact: "012207047",
          price: 4.5,
          image: "image 34.png",
        },
        {
          id: 3,
          title: "Toothbrush Holder",
          store: "Hannah's Store",
          rating: 4.5,
          reviews: 413,
          location: "Preah Vihear",
          contact: "012207047",
          price: 4.5,
          image: "image 34.png",
        },
        {
          id: 4,
          title: "Toothbrush Holder",
          store: "Hannah's Store",
          rating: 4.5,
          reviews: 413,
          location: "Preah Vihear",
          contact: "012207047",
          price: 4.5,
          image: "image 34.png",
        },
        {
          id: 5,
          title: "Toothbrush Holder",
          store: "Hannah's Store",
          rating: 4.5,
          reviews: 413,
          location: "Preah Vihear",
          contact: "012207047",
          price: 4.5,
          image: "image 34.png",
        },
        {
          id: 6,
          title: "Toothbrush Holder",
          store: "Hannah's Store",
          rating: 4.5,
          reviews: 413,
          location: "Preah Vihear",
          contact: "012207047",
          price: 4.5,
          image: "image 34.png",
        },
        // Add more items as needed
      ],
    };
  },
  // methods: {
  //   reserve(itemId) {
  //     // Placeholder method for handling reservation
  //     console.log("Contact owner for item ID:", itemId);
      
  //     // Simulate loading state for 2 seconds
  //     this.loading = true;
  //     setTimeout(() => {
  //       this.loading = false;
  //       // Add logic to handle successful reservation
  //       console.log("Reservation completed for item ID:", itemId);
  //     }, 2000);
  //   },
  // },
};
</script>

<style scoped>
/* .custom-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.custom-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
} */
</style>
