<template>
  <div id="nav" class="nav">
    <nav class="navbar navbar-expand navbar-light">
      <div class="container">
        <a href="https://khalibre.com/" class="navbar-brand">AntiWaste</a>
        <div class="collapse navbar-collapse v-btn--fixed pr-15">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a href="/event" class="nav-link">Trash</a>
            </li>
            <li class="nav-item">
              <a href="/recycle" class="nav-link">Recycle</a>
            </li>
            <li class="nav-item">
              <a href="/event" class="nav-link">Event</a>
            </li>
            <li class="nav-item">
              <a href="/contact" class="nav-link">Contact</a>
            </li>
            <li class="nav-item" v-if="isAuth">
              <a href="/login" class="nav-link" @click="Logout">Log Out</a>
            </li>
            <li class="nav-item d-flex align-center" v-else>
              <a href="/login" class="nav-link">Register</a>
              <a href="/login" class="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Service from '../Service/service';
export default {
  name: 'NavTop',
  components: {
    // NavTop,
  },
  data() {
    return {
      isAuth: false,
    };
  },
  Logout() {
    Service.logout();
    this.isAuth = false;
    this.$router.push('/login');
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  },
};
</script>
<style scoped>
.nav-link:hover {
}
.nav-link:hover {
  color: darkgreen;
  font-size: large;
  font-weight: 500;
}
</style>
