<template>
  <!-- Carousel layout -->
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="item in items" :key="item.id">
      <!-- Two-column layout -->
      <div class="flex flex-col md:flex-row px-20 bg-gradient-to-r from-gray-100 via-green-100 to-gray-200">
        <!-- Left column with text -->
        <div class="w-full md:w-1/2 flex justify-center items-center p-4">
          <div class="p-6 flex flex-col justify-center items-center">
            <h2 class="text-xl font-bold mb-2">{{ item.title }}</h2>
            <h1 class="text-3xl font-extrabold mb-4">{{ item.subtitle }}</h1>
            <h3 class="text-2xl font-semibold mb-4">Up to {{ item.discount }}%</h3>
            <div class="flex space-x-4">
              <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Share</button>
              <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Explore</button>
            </div>
          </div>
        </div>

        <!-- Right column with the image -->
        <div class="w-full md:w-1/2 p-4">
          <img
            class="w-full h-96 object-cover rounded-lg"
            :src="item.image"
            alt="Product Image"
          />
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "YourComponent",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Best Deal Online on Recycle Plastic",
          subtitle: "Flower Jars",
          discount: 10,
          image: "https://www.decorhomeideas.com/wp-content/uploads/2016/08/painted-mason-daisy-jar-idea-476x600.jpg",
        },
        {
          id: 2,
          title: "Best Deal Online on Recycle Plastic",
          subtitle: "Wildflower",
          discount: 10,
          image: "https://www.rts.com/wp-content/uploads/2020/06/recycled-tires-3.jpg",
        },
        // Add more items as needed
      ],
    };
  },
};
</script>