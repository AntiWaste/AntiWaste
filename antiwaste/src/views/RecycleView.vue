<template>
  <div class="recycle">
    <welcome-card></welcome-card>
    <v-card-title class="text-lg-h5">
      <h3>Top categories</h3>
    </v-card-title>
    <categories-icon> </categories-icon>
    <div>
      <h3>Popular product that recycle from plastics</h3>
      <product-recycle-card></product-recycle-card>
    </div>
    <br />
    <div>
      <carousel-card></carousel-card>
    </div>
    <div>
      <h3>Recently Viewed</h3>
      <product-recycle-card></product-recycle-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
body {
  margin-top: 50px;
}
h3 {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
