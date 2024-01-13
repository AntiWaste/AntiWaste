<template>
  <div class="background">
    <v-container>
      <v-row>
        <!-- Left: Photo or Icons -->
        <v-col>
          <!-- Add your photo or icons here -->
          <img
            src="https://www.wastesorted.wa.gov.au/assets/gfx/der138-wastesorted-website-768-x-5002.jpg"
            alt="Product Image"
            class="product-image"
          />
        </v-col>

        <!-- Right: Text Content -->
        <v-col>
          <div>
            <v-card-title class="headline pt-10"
              >How to post recycling product and reach customer?</v-card-title
            >
            <v-card-text>
              <p class="pt-5 text-center text-md-left">
                Highlight the Eco-friendly and sustainable aspects of your
                recycling products. Emphasize their role in reducing waste,
                conserving resources, and promoting a circular economy. Use
                vivid language and captivating images to showcase the products'
                unique features and benefits.
              </p>
              <p>
                Attract new customers and encourage repeat purchases by offering
                discounts, loyalty programs, and special promotions. Consider
                bundling products, offering free shipping, or providing
                incentives for referrals.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" @click="learnMore">Learn More</v-btn>
            </v-card-actions>
          </div>
        </v-col>
      </v-row>
    </v-container>
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

<style scoped>
.product-image {
  width: 100%;
}
.background {
  background-color: rgb(249, 249, 249);
}
</style>
