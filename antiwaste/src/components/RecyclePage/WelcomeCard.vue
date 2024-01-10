<template>
  <div id="app">
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="align-end text-white"
        height="200"
        src="../../assets/image 20.png"
        cover
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

      <v-card-text>
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Share </v-btn>

        <v-btn color="orange"> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard",
  components: {
    // NavTop,
  },
};
</script>
