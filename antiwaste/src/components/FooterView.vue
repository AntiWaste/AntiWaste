<template>
  <div color="primary">
    <v-row justify="center">
      <v-col cols="12" md="3">
        <a href="#" class="navbar-brand">AntiWaste</a>
      </v-col>

      <v-col cols="12" md="6" class="text-center">
        <v-row>
          <v-col class="py-10" v-for="link in footerLinks" :key="link.id" cols="12" md="4">
            <v-text text color="white" @click="this.$router.push(link.route)">{{
              link.label
            }}</v-text>
          </v-col>
        </v-row>
      </v-col>

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
        { id: 2, label: 'Event', route: '/product' },
        { id: 3, label: 'Trash', route: '/contact' },
        { id: 4, label: 'Recycle', route: '/product' },
        { id: 5, label: 'FAQs', route: '/contact' },
        { id: 6, label: 'Contact', route: '/product' },
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
