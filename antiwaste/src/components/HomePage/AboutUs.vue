<template>
  <div class="background">
  <v-container>
    <div class="font-weight-bold text-h3 text-center py-10">
        About Us
    </div>

    <v-row>
      <!-- Left Column: Introduction -->
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="headline">Our Mission</v-card-title>
          <v-card-text>
            At AntiWaste, we are on a mission to create a sustainable future by reducing waste and promoting responsible consumption. We believe that every small action counts, and together, we can make a significant impact on the environment.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Right Column: Team Information -->
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="headline">Who We Are?</v-card-title>
          <v-card-text>
            AntiWaste is a team of passionate individuals dedicated to building a community that values and practices environmental responsibility. We are committed to providing a platform that connects people who share a common goal of reducing waste and contributing to a greener planet.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="headline">Our vision</v-card-title>
          <v-card-text>
            Our vision is to create a world where waste is minimized, and resources are utilized responsibly. We envision a community that embraces sustainable practices, values the beauty of recycled products, and actively participates in the circular economy.
          </v-card-text>
        </v-card>
      </v-col>
       
    </v-row>
  </v-container>
</div>
</template>

<style scoped>
.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
}

/* Add more custom styles as needed */
</style>


  
  <script>
  export default {
    data() {
      return {
        // Add any data properties if needed
      };
    },
  };
  </script>
  
  <style scoped>
  .headline {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .background {
    background-color: rgb(249, 249, 249);
  }
  /* Add more custom styles as needed */
  </style>
  