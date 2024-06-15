<template>
    <v-container>
      <v-row align="center" justify="center" class="not-found">
        <v-col cols="12" class="text-center">
          <h1 class="display-4">404 - Not Found</h1>
          <p class="headline">Oops! The page you are looking for doesn't exist.</p>
          <v-btn to="/" color="green">Back to Homepage</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found {
    height: 100vh; /* Make the container fill the entire viewport height */
  }
  </style>
  