<template>
  <!-- Carousel layout -->
  <v-carousel>
    <!-- Carousel item -->
    <v-carousel-item>
      <!-- Two-column layout -->
      <v-row>
        <!-- Left column with text -->
        <v-col cols="6">
          <v-card class="text-card">
            <v-card-title>Best Deal Online on Recycle Plastic</v-card-title>
            <h1>Flower Jars</h1>
            <v-card-text>
              <h3>Up to 10%</h3>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>
              <v-btn color="orange"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Right column with the image -->
        <v-col cols="6">
          <v-img
            class="cover-image"
            height="400"
            src="https://www.decorhomeideas.com/wp-content/uploads/2016/08/painted-mason-daisy-jar-idea-476x600.jpg"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-carousel-item>
    <v-carousel-item>
      <!-- Two-column layout -->
      <v-row>
        <!-- Left column with text -->
        <v-col cols="6">
          <v-card class="text-card">
            <v-card-title>Best Deal Online on Recycle Plastic</v-card-title>
            <h1>Wildflower</h1>
            <v-card-text>
              <h3>Up to 10%</h3>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>
              <v-btn color="orange"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Right column with the image -->
        <v-col cols="6">
          <v-img
            class="cover-image"
            height="400"
            src="https://www.rts.com/wp-content/uploads/2020/06/recycled-tires-3.jpg"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-carousel-item>

    <!-- Add more carousel items as needed -->
  </v-carousel>
  <!-- Light green-themed background -->
</template>

<script>
export default {
  name: "YourComponent",
};
</script>

<style scoped>
/* Light green-themed background */
.light-green-theme {
  background-color: #e0f4e6; /* Use a lighter shade of green */
  color: white;
  padding: 50px; /* Adjust the padding as needed */
}

/* Card on the left with text */
.text-card {
  max-width: 500px; /* Adjust the max-width as needed */
  margin-top: 50px;
  margin-left: 200px;
}

/* Image on the right */
.cover-image {
  width: 100%;
  height: 100%;
}
</style>
