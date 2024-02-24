<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img cover :src="imageUrl[i]">
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
  <TopCate />
  <DeTail />
  <WastePost />
  <FooterVeiw />
</template>

<style scoped>
/* .img {
    height: screen;
    margin: 0;
    padding: 0;
    width: full;
}  */
</style>
<script>
import DeTail from "./DeTail.vue";
import TopCate from "./TopCate.vue";
import WastePost from "./WastePost.vue";
import FooterVeiw from "../FooterView.vue";

export default {
  components: {
    TopCate,
    DeTail,
    WastePost,
    FooterVeiw,
  },
  data() {
    return {
      imageUrl: [
        {
          src: require("../../assets/event/image 2.png"),
        },
        {
          src: require("../../assets/event/waste.png"),
        },
        {
          src: require("../../assets/event/WasteManagement.jpg"),
        },
        {
          src: require("../../assets/event/waste.jpg"),
        },
      ],

      slides: ["Buy Waste from Local Seller!", "", "", ""],
      slide: 0,
    };
  },
};
</script>
