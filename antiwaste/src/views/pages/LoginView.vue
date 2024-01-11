<template>
<<<<<<< HEAD
<div class="login">
    <nav-top></nav-top>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <div class="container">
            <div class="username">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="password">
                <label for="psw">Password</label>
                <input type="password" id="password" v-model="password" required />
            </div>

            <button type="submit">Login</button>
        </div>
    </form>
</div>
=======
  <v-card class="login-container">
    <h2 v-if="isLogin">LOGIN</h2>
    <h2 v-else>Register</h2>
    <div :class="{ login_info_switch: isLogin, login_info: !isLogin }">
      <div class="login-img">
        <img
          v-if="isLogin"
          src="https://images.unsplash.com/photo-1525695230005-efd074980869?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width="350px"
          height="510px"
        />
        <img
          v-else
          src="https://images.unsplash.com/photo-1525695230005-efd074980869?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width="350px"
          height="547px"
        />
        <div v-if="!isLogin" class="login-methods text-center">
          <v-icon start icon="mdi-facebook" class="icon" color="blue"></v-icon>
          <v-icon start icon="mdi-google" class="icon" color="green"></v-icon>
          <v-icon start icon="mdi-twitter" class="icon" color="blue"></v-icon>
        </div>

        <!-- <v-card-text
          v-if="isLogin"
          @click="isLogin = false"
          class="switch-btn text-center"
        >
          Sign Up now <v-icon icon="mdi-chevron-right"></v-icon>
        </v-card-text> -->
        <v-card-text @click="ToggleClick" class="switch-btn text-center">
          {{ State }}<v-icon icon="mdi-chevron-right"></v-icon>
        </v-card-text>
      </div>
      <div class="pa-10 card" width="450">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
        <v-text-field
          density="compact"
          placeholder="Username "
          variant="outlined"
          v-model="username"
        ></v-text-field>
        <v-text-field
          v-if="!isLogin"
          density="compact"
          placeholder="Email "
          variant="outlined"
          prepend-inner-icon="mdi-email-outline"
          v-model="email"
        ></v-text-field>
        <div
          v-if="!isLogin"
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Phone
        </div>
        <v-text-field
          v-if="!isLogin"
          density="compact"
          placeholder="Enter your phone"
          variant="outlined"
          v-model="phone"
        ></v-text-field>
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >
        </div>

        <v-text-field
          v-if="!isLogin"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="password"
        ></v-text-field>
        <v-text-field
          v-if="isLogin"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="password"
        ></v-text-field>

        <v-text-field
          v-else
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your Confirm password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="confirm_password"
        ></v-text-field>
        <div v-if="validateError" class="text-red">
          {{ PasswordError }}
        </div>
        <v-select
          v-if="!isLogin"
          dense
          outlined
          label="Role"
          v-model="role"
          :items="roleOptions"
        ></v-select>

        <v-btn
          v-if="isLogin"
          @click="login"
          block
          class="mb-8 bg-lime-accent-4"
          color="black"
          size="large"
          variant="#AEEA00"
        >
          Sign In
        </v-btn>
        <v-btn
          v-else
          @click="register"
          block
          class="mb-8 bg-lime-accent-4"
          color="black"
          size="large"
          variant="#AEEA00"
        >
          Sign Up
        </v-btn>
        <div v-if="isLogin" class="login-methods2 text-center">
          <div class="_icon">
            <img
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
              width="20"
            />
            <!-- <v-icon start icon="mdi-facebook" class="icon"> </v-icon> -->
            <span>Google</span>
          </div>
          <div class="_icon">
            <img
              src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
              width="20"
            />
            <!-- <v-icon start icon="mdi-google" class="icon"></v-icon> -->
            <span>Facebook</span>
          </div>
          <!-- <v-icon start icon="mdi-twitter" class="icon"></v-icon> -->
        </div>

        <v-card-text v-if="isLogin" class="text-center">
          Don't have an account?
        </v-card-text>
        <!-- <v-card-text v-else @click="ToggleClick" class="switch-btn text-center">
          {{ State }}<v-icon icon="mdi-chevron-right"></v-icon>
        </v-card-text> -->
        <!-- <div @click="ToggleClick">{{ State }}</div> -->
      </div>
    </div>
  </v-card>
>>>>>>> main
</template>

<script>
//import service
import { Service } from '@/Service/service';

export default {
<<<<<<< HEAD
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        login() {
            // Perform registration logic here
            console.log("Registration submitted");
            console.log("Username:", this.username);
            console.log("Password:", this.password);
        },
=======
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      phone: '',
      isSubmitting: false,
      validateError: false,
      PasswordError: '',
      visible: false,
      isLogin: true,
      State: 'Register Now',
      isActive: false,
      role: '',
      roleOptions: ['Admin', 'User', 'Service Provider', 'Guest'],
    };
  },
  methods: {
    ToggleClick() {
      // this.isActive = !this.isActive;
      if (this.State === 'Register Now') {
        this.State = 'Login Now';
        this.isLogin = false;
      } else {
        this.State = 'Register Now';
        this.isLogin = true;
      }
    },

    async login(e) {
      e.preventDefault();

      if (this.username === '' || this.password === '') {
        this.validateError = true;
        this.PasswordError = 'Please fill all the fields.';
      } else {
        const UserInp = {
          username: this.username,
          password: this.password,
        };
        await Service.Login(UserInp).then(() => {
          this.$router.push('/');
        });
      }
    },
    async register(e) {
      e.preventDefault();
      if (this.password !== this.confirm_password) {
        this.validateError = true;
        this.PasswordError = 'Password not matched.';
      }
      const UserInp = {
        username: this.username,
        email: this.email,
        password: this.password,
        phone: this.phone,
        role: this.role,
      };
      await Service.SignUp(UserInp).then(() => {
        this.isLogin = true;
      });
>>>>>>> main
    },
};
</script>

<style scoped>
.login-container {
  background-color: #f7f7f7;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.login_info_switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  transition: 2s ease-in-out;
  /* background-color: #975b5b; */
}
.card {
  width: 450px;
  border: 1px solid rgb(224, 224, 224);
}
.login-img {
  position: relative;
}
.switch-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 10px;
  border: 1px solid rgb(82, 255, 3);
  background-color: rgba(0, 0, 0, 0.3);
  color: #74ff99;
  font-size: large;
  cursor: pointer;
}
.login-methods {
  position: absolute;
  bottom: 20%;
  left: 0;
  right: 0;
}
.login-methods2 {
  display: flex;
  /* border: 1px solid rgb(224, 224, 224); */
  flex-direction: column;
  gap: 10px;
}
.login-methods > .icon {
  border: 1px solid rgb(238, 238, 238);
  border-radius: 10px;
}
._icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  border: 1px solid rgb(238, 238, 238);
  cursor: pointer;
}
._icon:hover {
  background-color: #f4f3f3;
}
.switch-btn > span {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #04ff00;
  padding: 5px;
  font-size: 1.2rem;
  background-color: #6ecd1a;
  border-radius: 3px;
}
.login-img > img {
  object-fit: cover;
  /* border: 1px solid rgb(238, 238, 238); */
}
.icon {
  padding: 15px;
  width: 70px;
  border: 1px solid rgb(238, 238, 238);
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
}
.icon:hover {
  background-color: #f7f7f7;
}
.login_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #975b5b; */
  border: 1px solid rgb(224, 224, 224);
}

body {
    font-family: Arial, sans-serif;
}
<<<<<<< HEAD

.container {
    width: 300px;
    padding: 16px;
    background-color: white;
    margin: 0 auto;
    margin-top: 100px;
    border: 1px solid black;
    border-radius: 4px;
}

.username {
    margin-bottom: 20px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}
=======
>>>>>>> main
</style>
