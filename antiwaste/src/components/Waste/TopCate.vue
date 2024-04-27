<template>
  <v-app>
    <v-carousel
      cycle
      height="600"
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

<style scoped>
span {
  font-size: 15px;
}
a {
  text-decoration: none;
  color: #0062cc;
  border-bottom: 2px solid #0062cc;
}
.box {
  padding: 60px 0px;
}

.box-part {
  background: #fff;
  border-radius: 0;
  padding: 60px 10px;
  margin: 30px 0px;
}
.text {
  margin: 20px 0px;
}

.fa {
  color: #4183d7;
}
</style>
