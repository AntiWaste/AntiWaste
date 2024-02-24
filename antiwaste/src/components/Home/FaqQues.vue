<template>
  <!-- <div class="background"> -->
  <v-container>
    <div class="font-weight-bold text-h4 text-center py-10">
      Frequently Asked Questions
    </div>

    <v-card
      v-for="(question, index) in questions"
      :key="index"
      class="mb-2"
      @click="toggleAnswer(index)"
    >
      <v-card-title>
        <v-icon class="mr-2">{{ question.icon }}</v-icon>
        {{ question.questionText }}
      </v-card-title>
      <v-expand-transition>
        <v-card-text v-show="activeQuestion === index">
          {{ question.answerText }}
        </v-card-text>
      </v-expand-transition>
    </v-card>
  </v-container>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      activeQuestion: null,
      questions: [
        {
          icon: "fas fa-question-circle",
          questionText: "What is the mission of our anti-waste platform?",
          answerText:
            "Our mission is to reduce waste by promoting recycling and providing eco-friendly products crafted from recycled materials.",
        },
        {
          icon: "fas fa-recycle",
          questionText: "How can I sell my recyclable items on your platform?",
          answerText:
            "To sell your recyclable items, create an account, navigate to the 'Sell' section, and follow the simple steps to list your items for sale.",
        },
        {
          icon: "fas fa-box",
          questionText: "What kind of products are available in your store?",
          answerText:
            "Our store offers a range of sustainable and recycled products, including clothing, accessories, home decor, and more.",
        },
        {
          icon: "fas fa-shopping-cart",
          questionText:
            "How do I purchase products made from recycled materials?",
          answerText:
            "To purchase eco-friendly products, browse our store, add items to your cart, and proceed to checkout. Your contribution supports sustainable practices and promotes a greener future.",
        },
        {
          icon: "fas fa-trash-alt",
          questionText: "How does the process of buying recyclable items work?",
          answerText:
            "Our platform allows you to buy recyclable items from individuals looking to responsibly dispose of their waste. Browse the available items in the 'Buy' section, select the items you want, and complete the purchase process.",
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.activeQuestion = this.activeQuestion === index ? null : index;
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
