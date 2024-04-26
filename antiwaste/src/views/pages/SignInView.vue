<template>
  <div class="container">
    <div class="d-flex">
      <div class="img">
        <img :src="img" alt="recycle" width="450" />
      </div>
      <v-container class="d-flex flex-column align-center m-15">
        <h2>Sign In</h2>
        <div class="wrap-f">
          <div
            class="text-subtitle-1 text-medium-emphasis d-flex text-align-start"
          >
            Email
          </div>
          <v-text-field
            density="compact"
            placeholder="Email "
            variant="outlined"
            v-model="email"
          ></v-text-field>
        </div>
        <div class="wrap-f">
          <div
            class="text-subtitle-1 text-medium-emphasis d-flex text-align-start"
          >
            Password
          </div>
          <v-text-field
            density="compact"
            placeholder="Password "
            variant="outlined"
            v-model="password"
          ></v-text-field>
        </div>
        <v-text v-if="validated" class="error-validation-message">
          {{ messageError }}
        </v-text>
        <v-btn class="_icon bg-green" @click="login">Login</v-btn>
        <p class="signup">
          Don't you have account?
          <a href="#" @click="this.$router.push('register')">Sign Up</a>
        </p>
        <div class="login-methods2 text-center">
          <div class="_icon">
            <img
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
              width="20"
            />
            <span>Google</span>
          </div>
          <div class="_icon">
            <img
              src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
              width="20"
            />
            <span>Facebook</span>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Image from '../../assets/recycle.jpg';
import axios from 'axios';
export default {
  data() {
    return {
      img: Image,
      email: '',
      password: '',
      validated: false,
      messageError: '',
      user: null,
    };
  },
  methods: {
    async login() {
      if (this.email == '' || this.password == '') {
        this.validated = true;
        this.messageError = 'Please fill all the fields';
      } else {
        const data = {
          email: this.email,
          password: this.password,
        };
        await axios
          .post('http://localhost:5000/api/auth/login', data)
          .then((res) => {
            this.validated = false;
            this.messageError = '';
            this.user = res.data;
            localStorage.setItem('token', res.data.token);
            this.$router.push('/');
          })
          .catch((err) => {
            this.validated = true;
            this.messageError = err.response.data.message;
            console.log(this.messageError);
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
._icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid gray;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.wrap-f {
  width: 300px;
}
</style>
