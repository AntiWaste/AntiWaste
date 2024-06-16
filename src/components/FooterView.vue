<template>
  <div class="page-wrapper">
    <div class="py-5 flex justify-center">
      <div class="w-full max-w-md bg-white shadow-md rounded-lg">
      </div>
    </div>
    <hr class="my-5" />
    <footer class="bg-gradient-to-r from-gray-100 via-green-100 to-gray-200">
      <div class="container mx-auto py-8">
        <div class="flex flex-wrap justify-around">
          <div class="text-center mb-4 md:mb-0">
            <!-- <h5 class="text-xl text-green-500 font-bold">Anti<span class="text-white">Waste</span></h5> -->
            <div class="flex justify-center space-x-4 mt-3">
              <img :src="logo" alt="Logo" class="w-40" />
            </div>
          </div>
          <div class="flex flex-wrap justify-around w-full md:w-auto">
            <div class=" md:ml-20">
              <div class="flex flex-col *:">
                <a href="#" class="text-lg font-bold mt-3 ">Your Needs</a>
                <a href="#" class=" hover:text-green-500 mt-3">Integrated Security Platform</a>
                <a href="#" class=" hover:text-green-500">Core Features</a>
                <a href="#" class=" hover:text-green-500">Product Features</a>
                <a href="#" class=" hover:text-green-500">Pricing</a>
              </div>
            </div>
            <div class=" md:ml-20">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold mt-3 ">Your Needs</a>
                <a href="#" class=" hover:text-green-500 mt-3">Integrated Security Platform</a>
                <a href="#" class=" hover:text-green-500">Core Features</a>
                <a href="#" class=" hover:text-green-500">Product Features</a>
                <a href="#" class=" hover:text-green-500">Pricing</a>
              </div>
            </div>
            <div class=" md:ml-20">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold mt-3 ">Your Needs</a>
                <a href="#" class=" hover:text-green-500 mt-3">Integrated Security Platform</a>
                <a href="#" class=" hover:text-green-500">Core Features</a>
                <a href="#" class=" hover:text-green-500">Product Features</a>
                <a href="#" class=" hover:text-green-500">Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white py-2">
        <div class="container mx-auto flex flex-wrap justify-between items-center">
          <div class="text-gray-500">&copy;2024 <a href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s" target="_blank" class="text-gray-500 hover:text-green-500">copyright:AntiWaste.com</a></div>
          <div class="flex space-x-4">
            <a href="#" class="text-blue-600"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-pink-500"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-red-600"><i class="fab fa-youtube"></i></a>
            <a href="#" class="text-blue-400"><i class="fab fa-telegram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: require('../assets/anti-logo.png'),
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}

.cursor-pointer {
  cursor: pointer;
}

.text-center {
  text-align: left;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
