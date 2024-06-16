<template>
  <div class="bg-gradient-to-r from-gray-100 via-green-100 to-gray-200">
    <div class="container mx-auto p-6">
      <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-10">
        <img
          class="w-[350px] h-[400px] object-cover"
          :src="require('../../assets/Sticker_icon/how-to-recycle.png')"
          alt="How to recycle"
        />
        <div class="flex flex-col justify-center lg:pl-10 space-y-4">
          <div class="font-bold text-2xl lg:text-3xl pb-4">
            How to post recycling product and reach customer?
          </div>
          <p class="text-base sm:text-lg lg:text-xl leading-relaxed">
            Highlight the Eco-friendly and sustainable aspects of your recycling
            products. Emphasize their role in reducing waste, conserving
            resources, and promoting a circular economy. Use vivid language and
            captivating images to showcase the products' unique features and
            benefits. Attract new customers and encourage repeat purchases by
            offering discounts, loyalty programs, and special promotions. Consider
            bundling products, offering free shipping, or providing incentives for
            referrals.
          </p>
          <button @click="learnMore" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-1/4">
            Learn More
          </button>
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
