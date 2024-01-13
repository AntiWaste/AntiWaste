<template>
  <div class="recycle">
    <nav-top></nav-top>
    <body>
      <welcome-card></welcome-card>
      <v-card-title class="text-lg-h5">
        <h3>Top categories</h3>
      </v-card-title>
      <categories-icon> </categories-icon>
      <div>
        <h3>Popular product that recycle from plastics</h3>
        <product-recyle-card></product-recyle-card>
      </div>
      <carousel-card></carousel-card>
      <div>
        <h3>Recenty Viewed</h3>
      </div>
    </body>
  </div>
</template>
  
  <script>
export default { name: "recycleView" };
</script>
<!-- <script>
body{
  margin
}
</script> -->
<style>
body {
  margin-top: 30px;
}
h3 {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
  