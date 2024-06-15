<template>
  <!-- <div class="background"> -->
  <v-container>
    <div class="d-flex justify-space-between align-center p-10">
      <v-img
        cover
        width="350"
        height="400"
        src="../../assets/Sticker_icon/how-to-recycle.png"
      ></v-img>
      <div class="d-flex flex-column justify-center pl-10">
        <div class="font-weight-bold text-h4 pb-4">
          How to post recycling product and reach customer?
        </div>
        <p>
          Highlight the Eco-friendly and sustainable aspects of your recycling
          products. Emphasize their role in reducing waste, conserving
          resources, and promoting a circular economy. Use vivid language and
          captivating images to showcase the products' unique features and
          benefits. Attract new customers and encourage repeat purchases by
          offering discounts, loyalty programs, and special promotions. Consider
          bundling products, offering free shipping, or providing incentives for
          referrals.
        </p>
        <v-btn class="bg-green text-white w-25">Learn More</v-btn>
      </div>
    </div>

    
  </v-container>
  <!-- </div> -->
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

<style scoped>
.product-image {
  width: 100%;
}
</style>
