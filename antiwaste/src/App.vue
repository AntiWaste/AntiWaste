<template>
  <div id="app">
    <router-view />

  </div>
  <FooterView/>
</template>
<script>
import FooterView from "./components/FooterView.vue";
export default {
  name: "App",
  components: {
    FooterView
  }
 
};


</script>
