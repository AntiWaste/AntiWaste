<template>
<<<<<<< HEAD
  <!-- <NavTop /> -->
  <div class="text-center">
    <v-btn color="primary">
      Open Dialog
      <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
=======
  <div class="home">
    <nav-top></nav-top>
    <h2>This is Home Page</h2>
>>>>>>> 01aa8f161a1ad48446aae27ac3c62c741da9ae06
  </div>
</template>

<script>
<<<<<<< HEAD
// import NavTop from '@/components/NavTop.vue';
export default {
  // components: {
  //   NavTop,
  // },
  data() {
    return {
      dialog: false,
    };
  },
};

// Components
=======
export default { name: "HomeView" };
>>>>>>> 01aa8f161a1ad48446aae27ac3c62c741da9ae06
</script>
