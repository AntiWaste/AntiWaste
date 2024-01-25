<template>
  <div class="recycle">
    <nav-top></nav-top>
    <body>
      <welcome-card></welcome-card>
      <v-card-title class="text-lg-h5">Top categories </v-card-title>
      <categories-icon> </categories-icon>
      <div>
        <h3>Popular product that recycle from plastics</h3>
        <product-recyle-card></product-recyle-card>
      </div>

      <carousel-card></carousel-card>
    </body>
  </div>
</template>
  
  <script>
export default { name: "RecycleView" };
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
</style>
  