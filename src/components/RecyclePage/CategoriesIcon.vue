<template>
  <div class="d-flex justify-center">
    <div class="icon-container" v-for="(icon, index) in icons" :key="index">
      <v-icon :class="icon.class" :icon="icon.icon"></v-icon>
      <div class="description">{{ icon.description }}</div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CategoriesIcons",
  components: {},
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
          description: "Papper",
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
  
  <style scoped>
.icon-container {
  text-align: center;
  width: 145px; /* Adjusted width to fit 725px within 5 items with equal spacing */
  height: 75.14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.description {
  margin-top: 8px; /* Adjust the margin as needed */
  font-size: 12px; /* Adjust the font size as needed */
  color: #555; /* Adjust the color as needed */
}
</style>