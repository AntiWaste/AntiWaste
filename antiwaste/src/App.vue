<template>
  <NavTop :user="user" />
  <div id="app">
    <router-view :user="user" />
  </div>
</template>
<script>
import NavTop from "./components/NavTop.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    NavTop,
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    if (token) {
      await axios
        .get("user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.user = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
