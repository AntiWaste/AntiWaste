<template>
  <div id="app">
    <v-card class="mx-auto" max-height="435">
    <v-img
      class=" text-white flex justify-center items-center"
      height="435"
      src="../../assets/recycledproduct/image_cover.jpg"
      cover
    >
      <div id="welcomeText" class="flex flex-col justify-center items-center">
        <div class="text-4xl font-bold mb-3">Welcome to AntiWaste Recycling’s Store</div>
        <div class="text-h6">
          Please enjoy buying our product, feel free to deliver to other provinces too.
        </div>
      </div>
    </v-img>
  </v-card>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard",
};
</script>