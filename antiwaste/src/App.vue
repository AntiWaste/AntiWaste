<template>
  <v-app>
    <NavTop />
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>
<script>
import NavTop from './components/NavTop.vue';
export default {
  name: 'App',
  components: {
    NavTop,
  },
};
</script>
