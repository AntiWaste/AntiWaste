<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
