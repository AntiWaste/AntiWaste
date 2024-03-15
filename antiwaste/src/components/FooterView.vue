<template>
  <div class="custom-app">
    <v-app>
      <v-footer class="text-center d-flex flex-column">
        <div>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="text"
          ></v-btn>
        </div>

        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </div>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
          >
            {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>AntiWaste</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-linkedin",
      "fab fa-instagram",
    ],
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>
<style scoped>
.custom-app {
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color: black;
}
</style>
