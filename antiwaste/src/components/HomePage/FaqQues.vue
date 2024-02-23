<template>
  <div class="background">
    <v-container>
      <div class="font-weight-bold text-h3 text-center py-10">
        Frequently Asked Questions
      </div>

      <!-- Question 1 -->
      <v-card class="mb-2" @click="toggleAnswer(1)">
        <v-card-title>
          <v-icon class="mr-2">mdi-help-circle</v-icon>
          What is the mission of our anti-waste platform?
        </v-card-title>
        <v-expand-transition>
          <v-card-text v-show="activeQuestion === 1">
            Our mission is to reduce waste by promoting recycling and providing
            eco-friendly products crafted from recycled materials.
          </v-card-text>
        </v-expand-transition>
      </v-card>

      <!-- Question 2 -->
      <v-card class="mb-2" @click="toggleAnswer(2)">
        <v-card-title>
          <v-icon class="mr-2">mdi-recycle</v-icon>
          How can I sell my recyclable items on your platform?
        </v-card-title>
        <v-expand-transition>
          <v-card-text v-show="activeQuestion === 2">
            To sell your recyclable items, create an account, navigate to the
            'Sell' section, and follow the simple steps to list your items for
            sale.
          </v-card-text>
        </v-expand-transition>
      </v-card>

      <!-- Question 3 -->
      <v-card class="mb-2" @click="toggleAnswer(3)">
        <v-card-title>
          <v-icon class="mr-2">mdi-package-variant-closed</v-icon>
          What kind of products are available in your store?
        </v-card-title>
        <v-expand-transition>
          <v-card-text v-show="activeQuestion === 3">
            Our store offers a range of sustainable and recycled products,
            including clothing, accessories, home decor, and more.
          </v-card-text>
        </v-expand-transition>
      </v-card>
      <!-- Question 4 -->
      <v-card class="mb-2" @click="toggleAnswer(4)">
        <v-card-title>
          <v-icon class="mr-2">mdi-shopping</v-icon>
          How do I purchase products made from recycled materials?
        </v-card-title>
        <v-expand-transition>
          <v-card-text v-show="activeQuestion === 4">
            To purchase eco-friendly products, browse our store, add items to
            your cart, and proceed to checkout. Your contribution supports
            sustainable practices and promotes a greener future.
          </v-card-text>
        </v-expand-transition>
      </v-card>

      <!-- Question 5 -->
      <v-card class="mb-2" @click="toggleAnswer(5)">
        <v-card-title>
          <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
          How does the process of buying recyclable items work?
        </v-card-title>
        <v-expand-transition>
          <v-card-text v-show="activeQuestion === 5">
            Our platform allows you to buy recyclable items from individuals
            looking to responsibly dispose of their waste. Browse the available
            items in the 'Buy' section, select the items you want, and complete
            the purchase process.
          </v-card-text>
        </v-expand-transition>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeQuestion: null,
    };
  },
  methods: {
    toggleAnswer(questionNumber) {
      // Toggle the answer for the clicked question
      this.activeQuestion =
        this.activeQuestion === questionNumber ? null : questionNumber;
    },
  },
};
</script>

<style scoped>
.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.background {
  background-color: rgb(249, 249, 249);
}

/* Add more custom styles as needed */
</style>

