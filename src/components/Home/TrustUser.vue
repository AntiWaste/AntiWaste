<template>
  <div class="bg-white ">
    <div class="container mx-auto py-10 px-10">
      <div class="max-sm:text-2xl max-sm:flex font-bold text-4xl text-center py-10 text-green-500 typewriter">
        Helping a local zero waste a Collaborative for a Sustainable Future
      </div>
      <div class="flex flex-wrap -mx-4">
        <div
          v-for="statistic in statistics"
          :key="statistic.label"
          class="w-full md:w-1/4 px-4 py-2"
        >
          <div class="statistic  p-6 rounded-lg text-center">
            <div class="value-icon text-green-500 mb-4">
              <i :class="statistic.icon"></i>
            </div>
            <div class="value text-xl font-bold">{{ statistic.value }}</div>
            <div class="label text-gray-600 mt-2">{{ statistic.label }}</div>
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
      statistics: [
        {
          label: 'Users on our website',
          value: '10,000+',
          icon: 'fa fa-users',
        },
        {
          label: 'Trustworthy community members',
          value: '8,500+',
          icon: 'fa fa-check-circle',
        },
        {
          label: 'Products listed for sale',
          value: '5,000+',
          icon: 'fa fa-cube',
        },
        {
          label: 'Products purchased',
          value: '3,000+',
          icon: 'fa fa-shopping-cart',
        },
      ],
    };
  },
};
</script>

<style scoped>
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.value-icon {
  font-size: 36px;
}

.value {
  font-size: 18px;
}

.label {
  margin-top: 8px;
  color: #888;
}
</style>

<!-- Add Tailwind CSS to your project by including the following in your main.js or index.html -->
<!-- <script src="https://cdn.tailwindcss.com"></script> -->
