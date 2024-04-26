<template>
  <v-toolbar app class="hidden-xs-and-down px-15 pa-5 bg-white">
    <img :src="logo" alt="" width="200" />
    <v-spacer></v-spacer>
    <v-toolbar-items class="bg-white">
      <router-link
        style="text-decoration: none; color: inherit"
        class="text-center d-flex justify-center align-center px-5"
        v-for="item in nav"
        :key="item.icon"
        :to="item.link"
        :title="item.title"
        >{{ item.text }}
      </router-link>
    </v-toolbar-items>
    <div class="log-in-out d-flex">
      <router-link to="/login" class="btn-login bg-green mr-5"
        >Login</router-link
      >
      <router-link to="/register" class="btn-register">Register</router-link>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavTop',

  // props: ['user'],

  // methods: {
  //   handleLogout() {
  //     localStorage.removeItem('token');
  //     this.$router.push('/');
  //   },
  // },
  data() {
    return {
      dialog: false,
      logo: [require('../assets/anti-waste-logo.png')],
      nav: [
        {
          icon: 'home',
          text: 'Home',
          link: '/',
          title: 'Go back home page',
          active: true,
        },
        {
          icon: 'info',
          text: 'Waste',
          link: '/waste',
          title: 'Learn more about waste and recycling',
          active: false,
        },
        {
          icon: 'assignment_turned_in',
          text: 'Recycle',
          link: '/recycle',
          title: 'Some stuff that needs doing',
          active: false,
        },
        {
          icon: 'email',
          text: 'Event',
          link: '/event',
          title: 'Subscribe to our newsletter',
          active: false,
        },
        {
          icon: 'email',
          text: 'Contact',
          link: '/contact',
          title: 'Get in touch with us!',
          active: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn-login {
  background: #34d937;
  background-image: -webkit-linear-gradient(top, #34d937, #00ba09);
  background-image: -moz-linear-gradient(top, #34d937, #00ba09);
  background-image: -ms-linear-gradient(top, #34d937, #00ba09);
  background-image: -o-linear-gradient(top, #34d937, #00ba09);
  background-image: linear-gradient(to bottom, #34d937, #00ba09);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  text-shadow: 1px 4px 14px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: 12px;
  padding: 8px 25px 8px 25px;
  text-decoration: none;
}

.btn-login:hover {
  background: #25e310;
  background-image: -webkit-linear-gradient(top, #25e310, #13d487);
  background-image: -moz-linear-gradient(top, #25e310, #13d487);
  background-image: -ms-linear-gradient(top, #25e310, #13d487);
  background-image: -o-linear-gradient(top, #25e310, #13d487);
  background-image: linear-gradient(to bottom, #25e310, #13d487);
  text-decoration: none;
}

.btn-register {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #307d00;
  font-size: 12px;
  padding: 8px 25px 8px 25px;
  border: solid #0b9d32 2px;
  text-decoration: none;
}

.btn-register:hover {
  background: #25e310;
  background-image: -webkit-linear-gradient(top, #25e310, #13d487);
  background-image: -moz-linear-gradient(top, #25e310, #13d487);
  background-image: -ms-linear-gradient(top, #25e310, #13d487);
  background-image: -o-linear-gradient(top, #25e310, #13d487);
  background-image: linear-gradient(to bottom, #25e310, #13d487);
  text-decoration: none;
}

.a {
  text-decoration: none;
  color: black;
}
nav {
  position: sticky;
  width: 100%;
}

ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li > a {
  color: grey;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  color: lightgreen;
}
</style>
