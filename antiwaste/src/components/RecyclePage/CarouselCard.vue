<template>
  <v-app>
    <v-container>
      <v-carousel>
        <v-carousel-item
          v-for="(item, index) in carouselItems"
          :key="index"
          :src="item.src"
          cover
        >
          <v-row align="center">
            <v-col cols="6">
              <!-- Left side with text -->
              <div class="text-container">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
              </div>
            </v-col>

            <v-col cols="6">
              <!-- Right side with the image -->
              <v-img :src="item.src" aspect-ratio="1"></v-img>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "MyCarousel",
  data() {
    return {
      carouselItems: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Docks",
          description: "Beautiful docks under the sky",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
          title: "Hotel",
          description: "Luxurious hotel with a stunning view",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          title: "Sunshine",
          description: "Enjoying the sunshine on a bright day",
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-container {
  padding: 20px;
  text-align: left;
  color: white;
  background-color: rgba(0, 0, 0, 0.7); /* Add a semi-transparent background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* Make the text-container take up the full height of the v-row */
}

.text-container h2 {
  margin-bottom: 10px;
}
</style>