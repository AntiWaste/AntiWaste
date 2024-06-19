<template>
    <div class="background">
      <div class="p-10">
        <div class="flex flex-col lg:flex-row items-center">
          <!-- Image Section -->
          <div class="lg:w-1/2 mb-6 lg:mb-0">
            <v-img class="w-full lg:max-w-md mx-auto" cover src="../../assets/event/paperwaste.png" alt="Papers"></v-img>
          </div>
          <!-- Content Section -->
          <div class="lg:w-1/2 lg:pl-10">
            <div class="font-bold text-2xl mb-4">Papers</div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <v-btn class="bg-green text-white w-full lg:w-auto">View More</v-btn>
              <v-btn class="bg-white text-green w-full lg:w-auto">Contact Owner</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .background {
    background-color: rgb(249, 249, 249);
  }
  
  /* Additional styling classes for Tailwind */
  
  /* Centering the buttons vertically */
  .v-btn {
    align-self: center;
  }
  </style>
  