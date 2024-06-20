<template>
  <div>
    <div>
      <div >
        <div class="text-center">
          <h2 class="font-bold text-4xl pb-5">
            Our
            <span class="text-green-500">Top categories of </span>Recycling
          </h2>
          <!-- <p class="sec-icon"><i class="fa-solid fa-gear"></i></p> -->
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
              <router-link to="/waste-listing" class="text-green-500 hover:underline">See More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
          <h2 class="text-3xl font-bold leading-tight mb-4">How to post recycling product and reach customer?</h2>
          <p class="text-lg leading-relaxed mb-4">
            Highlight the Eco-friendly and sustainable aspects of your
            recycling products. Emphasize their role in reducing waste,
            conserving resources, and promoting a circular economy. Use vivid
            language and captivating images to showcase the products' unique
            features and benefits.
          </p>
          <p class="text-lg leading-relaxed mb-4">
            Attract new customers and encourage repeat purchases by offering
            discounts, loyalty programs, and special promotions. Consider
            bundling products, offering free shipping, or providing incentives
            for referrals.
          </p>
          <router-link to="/waste-form"><v-btn color="green">Post Now</v-btn></router-link>
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
    };
  },
  methods: {
    learnMore() {
      // Handle the Learn More button click
    },
  },
};
</script>
