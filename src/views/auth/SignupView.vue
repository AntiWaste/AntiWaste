<template>
  <div
    class="container flex flex-col lg:flex-row items-center justify-center min-h-screen"
  >
    <div class="hidden lg:block">
      <img :src="img" alt="recycle" class="w-full max-w-md" />
    </div>
    <div class="flex flex-col items-center lg:ml-10 px-10 py-5 w-full max-w-lg">
      <h2 class="text-2xl font-semibold mb-4 font-mono">Create New Account</h2>
      <div class="w-full">
        <label class="block text-sm font-medium text-gray-700">Account</label>
        <v-text-field
          density="compact"
          placeholder="Username"
          variant="outlined"
          v-model="username"
          class="w-full"
        ></v-text-field>
      </div>
      <div class="w-full">
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <v-text-field
          density="compact"
          placeholder="Email"
          variant="outlined"
          type="email"
          v-model="email"
          class="w-full"
        ></v-text-field>
      </div>
      <div class="w-full">
        <label class="block text-sm font-medium text-gray-700">Password</label>
        <v-text-field
          density="compact"
          placeholder="Password"
          variant="outlined"
          type="password"
          v-model="password"
          class="w-full"
        ></v-text-field>
      </div>
      <div class="w-full">
        <label class="block text-sm font-medium text-gray-700"
          >Confirm Password</label
        >
        <v-text-field
          density="compact"
          placeholder="Confirm Password"
          variant="outlined"
          type="password"
          v-model="confirmPassword"
          class="w-full"
        ></v-text-field>
      </div>
      <div class="w-full">
        <v-select
          v-model="role"
          :items="roleOptions"
          label="Role"
          dense
          outlined
          placeholder="Select Role"
          class="w-full mt-4"
        ></v-select>
      </div>
      <v-text v-if="validated" class="text-red-500 mb-2">
        {{ messageError }}
      </v-text>
      <div
        class="bg-green-500 text-white py-2 px-4 rounded cursor-pointer mb-4"
        @click="register"
      >
        Register
      </div>
      <p class="text-gray-700">
        Already have an account?
        <a
          @click="this.$router.push('login')"
          class="text-red-500 hover:text-green-500 cursor-pointer"
          >Sign In</a
        >
      </p>
      <div class="flex space-x-4 mt-4">
        <div
          class="flex items-center space-x-2 bg-gray-100 hover:bg-green-500 p-2 rounded-lg cursor-pointer"
        >
          <img
            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            width="20"
            alt="Google"
          />
          <span>Google</span>
        </div>
        <div
          class="flex items-center space-x-2 bg-gray-100 hover:bg-green-500 p-2 rounded-lg cursor-pointer"
        >
          <img
            src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
            width="20"
            alt="Facebook"
          />
          <span>Facebook</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'; // Adjust according to your axios configuration file
import { useToast } from 'vue-toastification';
import Image from '../../assets/recycle.jpg';

export default {
  data() {
    return {
      img: Image,
      roleOptions: [
        { value: 'user', title: 'User' },
        { value: 'service_provider', title: 'Service Provider' },
      ],
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: '',
      validated: false,
      messageError: "",
    };
  },
  methods: {
    async register() {
      const toast = useToast();
      if (
        this.username === "" ||
        this.email === "" ||
        this.password === "" ||
        this.confirmPassword === "" ||
        this.role === ""
      ) {
        this.validated = true;
        this.messageError = "Please fill all the fields";
        toast.error(this.messageError);
      } else if (this.password !== this.confirmPassword) {
        this.validated = true;
        this.messageError = "Passwords do not match";
        toast.error(this.messageError);
      } else {
        console.log("Registering user:", this.username, this.email, this.role);
        try {
          const response = await axios.post("register", {
            name: this.username,
            email: this.email,
            password: this.password,
            role: this.role,
          });
          console.log("API Response:", response);
          this.validated = false;
          this.messageError = "";
          toast.success("Registration successful");
          this.$router.push("login");
        } catch (error) {
          this.validated = true;
          console.error("Error during registration:", error);
          if (error.response) {
            console.error("Server responded with an error:", error.response);
            this.messageError =
              error.response.data.message || "Registration failed";
          } else if (error.request) {
            console.error("No response received from server:", error.request);
            this.messageError = "No response received from server";
          } else {
            console.error("Error in making request:", error.message);
            this.messageError = "Error in making request: " + error.message;
          }
          toast.error(this.messageError);
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  @apply flex justify-center items-center min-h-screen;
}
@media (max-width: 1024px) {
  .img {
    display: none;
  }
}
</style>
