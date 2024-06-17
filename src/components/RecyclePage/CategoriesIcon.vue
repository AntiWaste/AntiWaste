<template>
  <div class="flex  justify-center items-center space-x-20 pb-10 pt-5 ">
    <div v-for="(icon, index) in icons" :key="index" class="flex flex-col hover:text-green-600">
      <v-icon :class="icon.class" :icon="icon.icon"></v-icon>
      <div class="text-center">{{ icon.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesIcons",
  data() {
    return {
      icons: [
        {
          icon: "fa:fas fa-bottle-water",
          class: "mr-4",
          description: "Plastic",
        },
        {
          icon: "fa:fas fa-newspaper",
          class: "mr-4",
          description: "Paper",
        },
        {
          icon: "fa:fas fa-wine-glass",
          class: "mr-2",
          description: "Glass",
        },
        {
          icon: "fa:fas fa-lightbulb",
          class: "mr-2",
          description: "E-Waste",
        },
        {
          icon: "fa:fas fa-leaf",
          class: "mr-2",
          description: "Organic",
        },
        // Add more icons with descriptions as needed
      ],
    };
  },
};
</script>

