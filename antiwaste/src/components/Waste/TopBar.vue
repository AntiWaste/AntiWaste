<template>
  <v-app>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img cover :src="colors[i]" height="100%">
          <div
            class="d-flex fill-height justify-center align-center text-shades-white"
          >
            <div class="font-weight-bold text-h2">
              {{ slide }}
            </div>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<style scoped>
/* .img {
    filter: blur(2px);
    height: 100%;
} */
</style>

<script>
export default {
  data() {
    return {
      colors: [
        'https://www.russellkennedy.com.au/Images/UserUploadedImages/262/Pollution%20at%20beach%201900x500.jpg',
        'https://png.pngtree.com/background/20211215/original/pngtree-world-environment-day-green-city-minimalist-environment-day-poster-background-picture-image_1478287.jpg',
        'https://png.pngtree.com/background/20210710/original/pngtree-world-environment-day-background-june-5-picture-image_1003798.jpg',
        // 'https://img.freepik.com/premium-vector/set-recycle-bins-trash-flat-design_115464-688.jpg?w=2000',
        'https://www.ptecologicalservices.com/assets/images/products/organicwasteconvertor.gif',
      ],
      slides: [
        'Zero-Waste Lifestyle in Cambodia',
        '',
        'Zero-Waste Lifestyle in Cambodia',
        '',
      ],
      slide: 0,
    };
  },
};
</script>
