<template>
  <div class="background">
    <v-container>
      <!-- Main content section -->
      <div class="flex flex-col md:flex-row items-center justify-between py-16">
        <!-- Image section -->
        <div class="md:mr-16">
          <img
            class="w-full md:w-64 h-auto rounded-lg shadow-lg"
            :src="require('../../assets/Sticker_icon/About-Us-PNG-HD.png')"
            alt="About Us Image"
          />
        </div>
        
        <!-- Text content section -->
        <div class="mt-6 md:mt-0 md:w-1/2">
          <div class="font-bold text-2xl mb-4">About Us</div>
          <p class="text-gray-700 leading-relaxed">
            In the heart of Cambodia, a movement is stirring, one that seeks to
            transform the nation's relationship with waste. This movement is
            fueled by a collective determination to embrace zero-waste
            principles, embarking on a journey towards a more sustainable and
            environmentally conscious future.
          </p>
          <button class="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 focus:outline-none">
            Learn More
          </button>
        </div>
      </div>

      <!-- Cards section -->
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4 mb-8">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="text-xl font-bold mb-4">Our Mission</div>
            <p class="text-gray-700">
              At AntiWaste, we are on a mission to create a sustainable future
              by reducing waste and promoting responsible consumption. We
              believe that every small action counts, and together, we can make
              a significant impact on the environment.
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/3 px-4 mb-8">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="text-xl font-bold mb-4">Who We Are?</div>
            <p class="text-gray-700">
              AntiWaste is a team of passionate individuals dedicated to
              building a community that values and practices environmental
              responsibility. We are committed to providing a platform that
              connects people who share a common goal of reducing waste and
              contributing to a greener planet.
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/3 px-4 mb-8">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="text-xl font-bold mb-4">Our Vision</div>
            <p class="text-gray-700">
              Our vision is to create a world where waste is minimized, and
              resources are utilized responsibly. We envision a community that
              embraces sustainable practices, values the beauty of recycled
              products, and actively participates in the circular economy.
            </p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  background-color: #f7f2f2;
  background-image: linear-gradient(62deg, #f7f2f2 0%, #ebfff0 50%, #f5f3f3 100%);
}
</style>
