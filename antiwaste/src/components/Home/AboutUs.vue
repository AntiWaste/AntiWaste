<template>
  <div class="background">
    <v-container>
      <div class="d-flex justify-space-between">
        <div>
          <v-img
            cover
            class="ma-16"
            width="300"
            src="../../assets/Sticker_icon/About-Us-PNG-HD.png"
          ></v-img>
        </div>
        <div class="d-flex flex-column justify-center">
          <div class="font-weight-bold text-h4 pb-4">About Us</div>
          <p>
            In the heart of Cambodia, a movement is stirring, one that seeks to
            transform the nation's relationship with waste. This movement is
            fueled by a collective determination to embrace zero-waste
            principles, embarking on a journey towards a more sustainable and
            environmentally conscious future.
          </p>
          <v-btn class="bg-green text-white w-25">Learn More</v-btn>
        </div>
      </div>

      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title class="headline">Our Mission</v-card-title>
            <v-card-text>
              At AntiWaste, we are on a mission to create a sustainable future
              by reducing waste and promoting responsible consumption. We
              believe that every small action counts, and together, we can make
              a significant impact on the environment.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-card-title class="headline">Who We Are?</v-card-title>
            <v-card-text>
              AntiWaste is a team of passionate individuals dedicated to
              building a community that values and practices environmental
              responsibility. We are committed to providing a platform that
              connects people who share a common goal of reducing waste and
              contributing to a greener planet.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-card-title class="headline">Our vision</v-card-title>
            <v-card-text>
              Our vision is to create a world where waste is minimized, and
              resources are utilized responsibly. We envision a community that
              embraces sustainable practices, values the beauty of recycled
              products, and actively participates in the circular economy.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
/* Add more custom styles as needed */
</style>
