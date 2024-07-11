<template>
  <div>
    <!-- Top Categories Section -->
    <div>
      <div>
        <div class="text-center">
          <h2 class="font-bold text-4xl pb-5">
            Our
            <span class="text-green-500">Top Categories of Recycling</span>
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mt-5 md:mt-4">
        <div v-for="(item, index) in items" :key="index" class="col">
          <div class="service-card bg-white shadow-lg rounded-lg p-8 hover:bg-gradient-to-r from-green-400 to-light-green-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div class="icon-wrapper bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i :class="item.icon"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
            <div class="flex justify-between mt-4">
              <router-link
                :to="{ path: '/waste-listing', query: { category: item.title } }"
                class="text-green-500 hover:underline"
              >
                See More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Waste Listing Section
    <div class="container mx-auto my-10">
      <h2 v-if="selectedCategory" class="text-3xl font-bold mb-4">Wastes in {{ selectedCategory }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="waste in filteredWastes" :key="waste.id" class="col">
          <div class="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              :src="require(`@/assets/${waste.img}`)"
              alt="Waste Image"
              class="w-full h-64 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">{{ waste.name }}</h3>
              <p class="text-gray-600">{{ waste.description }}</p>
              <div class="flex justify-between mt-4">
                <span class="text-gray-700">${{ waste.price }}</span>
                <router-link
                  :to="{ path: '/waste-details', query: { id: waste.id } }"
                  class="text-green-500 hover:underline"
                >
                  View Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    
    <!-- How to Post Section -->
    <div class="container mx-auto my-10">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
          <img
            :src="require(`@/assets/${items[0].img}`)"
            alt="Product Image"
            class="product-image rounded-lg shadow-lg"
          />
        </div>
        <div class="w-full md:w-1/2 p-6 flex flex-col justify-center items-start">
          <div>
            <h2 class="text-3xl font-bold leading-tight mb-4">How to Post Recycling Product and Reach Customers?</h2>
            <p class="text-lg leading-relaxed mb-4">
              Highlight the eco-friendly and sustainable aspects of your recycling products. Emphasize their role in reducing waste, conserving resources, and promoting a circular economy. Use vivid language and captivating images to showcase the products' unique features and benefits.
            </p>
            <p class="text-lg leading-relaxed mb-4">
              Attract new customers and encourage repeat purchases by offering discounts, loyalty programs, and special promotions. Consider bundling products, offering free shipping, or providing incentives for referrals.
            </p>
            <router-link to="/waste-form">
              <v-btn color="green">Post Now</v-btn>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Glass Bottles',
          img: 'event/glass.png',
          icon: 'fa-solid fa-wine-glass-alt',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque aut exercitationem?',
        },
        {
          id: 2,
          title: 'Plastics',
          img: 'event/plastic.png',
          icon: 'fa-solid fa-gear',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque aut exercitationem?',
        },
        {
          id: 3,
          title: 'Metals',
          img: 'event/mental.png',
          icon: 'fa-solid fa-globe',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque aut exercitationem?',
        },
        {
          id: 4,
          title: 'Paper',
          img: 'event/paper.png',
          icon: 'fa-regular fa-trash-alt',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque aut exercitationem?',
        },
        {
          id: 5,
          title: 'E-Waste',
          img: 'event/E-waste.png',
          icon: 'fa-solid fa-people-group',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque aut exercitationem?',
        },
        {
          id: 6,
          title: 'Textiles',
          img: 'event/textile.png',
          icon: 'fa-solid fa-tshirt',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque aut exercitationem?',
        },
      ],
      selectedCategory: '', // To store the selected category from query parameter
    };
  },
  computed: {
    filteredWastes() {
      if (!this.selectedCategory) {
        // If no category is selected, return all wastes
        return this.items;
      } else {
        // Filter items based on selected category title
        return this.items.filter(item => item.category === this.selectedCategory);
      }
    },
  },
  created() {
    // Fetch and set selected category from query parameter
    this.selectedCategory = this.$route.query.category || '';
  },
};
</script>

<style scoped>
/* Scoped styles for this component */
</style>
