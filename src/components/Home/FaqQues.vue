<template>
  <div>
    <div class="bg-gradient-to-r from-gray-100 via-green-100 to-gray-200 w-full">
      <div class="font-bold text-4xl text-center py-10 px-10">
        Frequently Asked Questions
      </div>
      <div class="space-y-4 p-10">
        <div 
          v-for="(fqa, index) in fqas" 
          :key="index" 
          class=" border border-gray-200 rounded-lg overflow-hidden"
        >
          <div 
            @click="toggleAnswer(index)" 
            class="bg-white cursor-pointer p-4 flex justify-between items-center"
          >
            <span>{{ fqa.question }}</span>
            <svg 
              :class="{ 'transform rotate-180 ': activeQuestion === index }" 
              class="w-6 h-6 transition-transform text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M19 9l-7 7-7-7" 
              ></path>
            </svg>
          </div>
          <div 
            v-if="activeQuestion === index" 
            class="p-4 bg-green-50 text-gray-700"
          >
            {{ fqa.answer }}
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
      fqas: [
        {
          question: 'What is the mission of our anti-waste platform?',
          answer: 'Our mission is to reduce waste by promoting recycling and providing eco-friendly products crafted from recycled materials.',
        },
        {
          question: 'How can I sell my recyclable items on your platform?',
          answer: "To sell your recyclable items, create an account, navigate to the 'Sell' section, and follow the simple steps to list your items for sale.",
        },
        {
          question: 'What kind of products are available in your store?',
          answer: 'Our store offers a range of sustainable and recycled products, including clothing, accessories, home decor, and more.',
        },
        {
          question: 'How do I purchase products made from recycled materials?',
          answer: 'To purchase eco-friendly products, browse our store, add items to your cart, and proceed to checkout. Your contribution supports sustainable practices and promotes a greener future.',
        },
        {
          question: 'How does the process of buying recyclable items work?',
          answer: 'Our platform allows you to buy recyclable items from individuals looking to responsibly dispose of their waste. Browse the available items in the Buy section, select the items you want, and complete the purchase process.',
        },
      ],
      activeQuestion: null,
    };
  },
  methods: {
    toggleAnswer(questionNumber) {
      this.activeQuestion =
        this.activeQuestion === questionNumber ? null : questionNumber;
    },
  },
};
</script>

<style scoped>
/* Tailwind CSS is utility-first and doesn't require scoped styles. */
</style>
