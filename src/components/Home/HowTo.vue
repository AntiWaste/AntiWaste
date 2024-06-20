<template>
  <div class="bg-gradient-to-r from-gray-100 via-green-100 to-gray-200">
    <div class="container mx-auto p-6 max-sm:flex px-10">
      <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-10 ">
        <img
          class="w-[350px] h-[400px] object-cover"
          :src="require('../../assets/Sticker_icon/how-to-recycle.png')"
          alt="How to recycle"
        />
        <div class="flex flex-col justify-center lg:pl-10 space-y-4">
          <div class="font-bold text-2xl lg:text-3xl pb-4">
            Post Your Recycling Product Now!
          </div>
          <p class="text-base sm:text-lg lg:text-xl leading-relaxed">
            Are you ready to reach more customers and earn money from your recycling products? Post your products on AntiWaste today and showcase them to a community dedicated to sustainability.
          </p>
          <router-link to="/listing-product"><button class="bg-green-500 text-white py-2 px-5 rounded hover:bg-green-600 w-1/4 ">
            Post Your Product Now
          </button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    learnMore() {
      // Add logic to navigate to the "Learn More" page or section
    },
  },
};
</script>
