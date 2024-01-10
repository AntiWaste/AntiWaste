<template>
<<<<<<< HEAD
  <HelloWorld />
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
>>>>>>> 53f93dd2d7df6657ce2fac32e878471431f7d927
  </div>
</template>

<script>
<<<<<<< HEAD
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  data() {
    return {
      dialog: false,
    };
  },
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
=======
export default { name: "HomeView" };
>>>>>>> 53f93dd2d7df6657ce2fac32e878471431f7d927
</script>
