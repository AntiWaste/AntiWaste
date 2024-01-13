<template>
  <v-row align="center" justify="center">
    <v-col cols="auto" class="custom-card">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        cover
        height="250"
        src="../../assets/recycledproduct/image 33.png"
      ></v-img>

      <v-card-item>
        <v-card-title>Toothbrush Holder</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Hannah's Store</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <div class="text-grey ms-4">4.5 (413)</div>
        </v-row>
      </v-card-text>
      <v-text> Location: Preah Vihear </v-text><br />
      <v-text>Contact Number: 012207047</v-text>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title><b>$4.5</b></v-card-title>

      <v-card-actions>
        <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
          Contact Owner
        </v-btn>
      </v-card-actions>
    </v-col>
    <v-col cols="auto" class="custom-card">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        cover
        height="250"
        src="../../assets/recycledproduct/image 34.png"
      ></v-img>

      <v-card-item>
        <v-card-title>Pen holder</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Hannah's Store</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <div class="text-grey ms-4">4.5 (413)</div>
        </v-row>
      </v-card-text>
      <v-text> Location: Preah Vihear </v-text><br />
      <v-text>Contact Number: 012207047</v-text>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title><b>$4.5</b></v-card-title>

      <v-card-actions>
        <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
          Contact Owner
        </v-btn>
      </v-card-actions>
    </v-col>
    <v-col cols="auto" class="custom-card">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        cover
        height="250"
        src="../../assets/recycledproduct/image 36.png"
      ></v-img>

      <v-card-item>
        <v-card-title>Flower Plots</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Hannah's Store</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <div class="text-grey ms-4">4.5 (413)</div>
        </v-row>
      </v-card-text>
      <v-text> Location: Preah Vihear </v-text><br />
      <v-text>Contact Number: 012207047</v-text>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title><b>$4.5</b></v-card-title>

      <v-card-actions>
        <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
          Contact Owner
        </v-btn>
      </v-card-actions>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.$router.push('/recycle');
    } else {
      this.$router.push('/login');
    }
  },
};
</script>
<style scoped>
.custom-card {
  /* max-width: 1000px; */
  width: 425px;
  /* height: 117px; Adjust the height to maintain the aspect ratio */
}
</style>
