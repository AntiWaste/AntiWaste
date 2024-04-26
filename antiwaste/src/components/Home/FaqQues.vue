<template>
  <!-- <div class="background"> -->
  <v-app>
    <v-container>
      <div class="font-weight-bold text-h4 text-center py-10">
        Frequently Asked Questions
      </div>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(fqa, index) in fqas"
          :key="index"
          :text="fqa.answer"
          :title="fqa.question"
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-app>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      fqas: [
        {
          question: 'What is the mission of our anti-waste platform?',
          answer:
            'Our mission is to reduce waste by promoting recycling and providing eco-friendly products crafted from recycled materials.',
        },
        {
          question: 'How can I sell my recyclable items on your platform?',
          answer:
            "To sell your recyclable items, create an account, navigate to the 'Sell' section, and follow the simple steps to list your items for sale.",
        },
        {
          question: 'What kind of products are available in your store?',
          answer:
            'Our store offers a range of sustainable and recycled products, including clothing, accessories, home decor, and more.',
        },
        {
          question: 'How do I purchase products made from recycled materials?',
          answer:
            'To purchase eco-friendly products, browse our store, add items to your cart, and proceed to checkout. Your contribution supports sustainable practices and promotes a greener future.',
        },
        {
          question: 'How does the process of buying recyclable items work?',
          answer:
            'Our platform allows you to buy recyclable items from individuals looking to responsibly dispose of their waste. Browse the available items in the Buy section, select the items you want, and complete the purchase process.',
        },
      ],
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
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.background {
  background-color: rgb(249, 249, 249);
}

/* Add more custom styles as needed */
</style>
