<template>
  <div color="primary">
    <v-row justify="center">
      <!-- <v-col cols="12" md="3">
        <img src="path/to/logo.png" alt="Logo" class="footer-logo" />
      </v-col>

      <v-col cols="12" md="6" class="text-center">
        <v-row>
          <v-col v-for="link in footerLinks" :key="link.id" cols="12" md="4">
            <v-btn text color="white" @click="this.$router.push(link.route)">{{
              link.label
            }}</v-btn>
          </v-col>
        </v-row>
      </v-col> -->

      <v-col cols="12" md="3" class="text-right">
        <v-icon v-for="icon in socialIcons" :key="icon" class="mr-2">{{
          icon
        }}</v-icon>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" class="text-center white--text">
        &copy; 2024 Your Company. All rights reserved.
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        { id: 1, label: 'Home', route: '/' },
        { id: 2, label: 'Products', route: '/product' },
        { id: 3, label: 'Contact', route: '/contact' },
      ],
      socialIcons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin'],
    };
  },
  // methods: {
  //   navigate() {
  //     // Add logic to navigate to the specified URL
  //   },
  // },
};
</script>

<style scoped>
/* Add your custom styles here */
.footer-logo {
  width: 100px; /* Adjust the size as needed */
}
</style>
