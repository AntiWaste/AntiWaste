<template>
  <div>
    <div>
      <div>
        <div class="text-center">
          <h2 class="font-bold text-4xl pb-5">
            Our
            <span class="text-green-500">Top categories of </span>Recycling
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mt-5 md:mt-4">
        <div v-for="(item, index) in filteredItems" :key="index" class="col">
          <div class="service-card bg-white shadow-lg rounded-lg p-8 hover:bg-gradient-to-r from-green-400 to-light-green-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div class="icon-wrapper bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <i :class="item.icon"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
            <div class="flex justify-between mt-4">
              <router-link
                :to="{ path: '/waste-listing', query: { categories: item.title } }"
                class="text-green-500 hover:underline"
              >
                See More
              </router-link>
            </div>
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
      selectedCategory: '', // To store the selected category
    };
  },
  computed: {
    filteredItems() {
      if (!this.selectedCategory) {
        // If no category is selected, return all items
        return this.items;
      } else {
        // Filter items based on selected category title
        return this.items.filter(item => item.title === this.selectedCategory);
      }
    }
  },
};
</script>

<style scoped>
/* Scoped styles for this component */
</style>
