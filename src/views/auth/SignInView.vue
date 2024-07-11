<template>
  <div
    class="container flex flex-col lg:flex-row items-center justify-center min-h-screen"
  >
    <div class="hidden lg:block">
      <img :src="img" alt="recycle" class="w-full max-w-md" />
    </div>
    <div class="flex flex-col items-center lg:ml-10 px-10 py-5 w-full max-w-lg">
      <h2 class="text-2xl font-semibold mb-4 font-mono">Login your account</h2>
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
      <v-text v-if="validated" class="error-validation-message">
        {{ messageError }}
      </v-text>
      <v-btn
        color="green"
        class="text-white py-2 px-4 rounded cursor-pointer mb-4"
        @click="handleLogin"
      >
        Login
      </v-btn>
      <p class="text-gray-700">
        Don't you have an account?
        <a
          @click="this.$router.push('register')"
          class="text-red-500 hover:text-green-500 cursor-pointer"
          >Sign Up</a
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
import { useToast } from "vue-toastification";
import Image from "../../assets/recycle.jpg";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      img: Image,
      email: "",
      password: "",
      validated: false,
      messageError: "",
      user: null,
    };
  },
  methods: {
    ...mapActions(["login"]),
    async handleLogin() {
      const toast = useToast();
      const adminEmail = process.env.VUE_APP_ADMIN_EMAIL;
      // Check if the fields are filled
      if (this.email === "" || this.password === "") {
        this.validated = true;
        this.messageError = "Please fill all the fields";
        toast.error(this.messageError);
      } else {
        const data = {
          email: this.email,
          password: this.password,
        };
        try {
          // Attempt to login
          await this.login(data);
          this.validated = false;
          this.messageError = "";
          toast.success("Login successful");

          // Check if the logged-in user is the admin
          if (this.email === adminEmail) {
            toast.success("Welcome, Admin!");
            this.$router.push("/dashboard-layout");
          } else {
            this.$router.push("/");
          }
        } catch (err) {
          // Handle login failure
          this.validated = true;
          this.messageError = err.response?.data?.message || "Login failed";
          toast.error(this.messageError);
          console.error("Error details:", err);
        }
      }
    },
  },
};
</script>
