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
            v-model="username"
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
            type="email"
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
            type="password"
            v-model="password"
          ></v-text-field>
        </div>
        <v-select
          class="wrap-f"
          dense
          outlined
          label="Role"
          v-model="role"
          :items="roleOptions"
        ></v-select>
        <v-text v-if="validated" class="error-validation-message">
          {{ messageError }}
        </v-text>
        <div class="_icon bg-green" @click="register">Register</div>
        <p class="signup">
          Already have an account?
          <a @click="this.$router.push('signin')">Sign In</a>
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
// import { Service } from '@/Service/service';
import axios from 'axios'
import Image from '../../assets/recycle.jpg';
export default {
  data() {
    return {
      img: Image,
      roleOptions: ['User', 'Service Provider'],
      username: '',
      email: '',
      password: '',
      role: '',
      validated: false,
      messageError: '',
    };
  },
  methods: {
    async register() {
      if (
        this.username == '' ||
        this.email == '' ||
        this.password == '' ||
        this.role == ''
      ) {
        this.validated = true;
        this.messageError = 'Please fill all the fields';
      } else {
        const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role
      };
      await axios.post('register',data).then((res)=>{
        this.$router.push('signin')
        console.log(res.data)
      }).catch((err)=>{
        this.validated = true;
        this.messageError = err.response.data.message
        console.log(this.messageError)
        console.log(err)
      })
      
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
.error-validation-message {
  color: red;
}
@media screen and (max-width: 720px) {
  .img {
    display: none;
  }
}
</style>
