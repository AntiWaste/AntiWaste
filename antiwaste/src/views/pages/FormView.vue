<template>
  <div class="container">
    <div class="d-flex">
      <div class="img">
        <img :src="img" alt="recycle" width="450" />
      </div>
      <v-container class="d-flex flex-column align-center m-15">
        <h2>Register</h2>
        <div class="wrap-f">
          <div
            class="text-subtitle-1 text-medium-emphasis d-flex text-align-start"
          >
            Account
          </div>
          <v-text-field
            density="compact"
            placeholder="Username "
            variant="outlined"
            v-model="registerForm.name"
          ></v-text-field>
        </div>
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
            v-model="registerForm.email"
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
            v-model="registerForm.password"
          ></v-text-field>
        </div>
        <div class="_icon bg-green" @click="register">Register</div>

        <p class="signup">
          Already have an account?
          <a href="#" @click="this.$router.push('signin')">Sign In</a>
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
export default {
  data() {
    return {
      img: Image,

      registerForm: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
      const payload = {
        name: this.registerForm.name,
        email: this.registerForm.email,
        password: this.registerForm.password,
      };

      console.log('Register in...', payload);
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
