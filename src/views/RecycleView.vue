<template>
  <div class="w-full">
    <welcome-card></welcome-card>

    <div class="mt-8">
      <h3 class="text-3xl font-bold text-center pb-10">Top Categories</h3>
      <categories-icon></categories-icon>
    </div>

    <div class="mt-8 ">
      <div class="flex items-center justify-between max-sm:flex max-sm:flex-col">
    <!-- Left section with text content -->
    <div class="flex flex-col items-center justify-center mx-auto">
      <div class="font-bold text-3xl text-center mb-5">
        Popular Product
      </div>
    </div>

    <!-- Right section with button -->
    <div class="pr-20">
   
      <button @click="navigateToListingProduct" class="w-32 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full">
        See More
      </button>
    </div>
    </div>
      
      <product-recycle-card></product-recycle-card>
    </div>

    <div class="mt-8 carousel w-full flex flex-col items-center justify-center">
      <h3 class="text-3xl font-bold text-center pb-10">On Promotion Products</h3>
      <carousel-card></carousel-card>
    </div>

    <div class="mt-8">
      <div class="flex items-center justify-between max-sm:flex max-sm:flex-col">
    <!-- Left section with text content -->
    <div class="flex flex-col items-center justify-center mx-auto">
      <div class="font-bold text-3xl text-center mb-5">
        Recently Viewed
      </div>
    </div>

    <!-- Right section with button -->
    <div class="pr-20">
     
      <button  @click="navigateToListingProduct" class="w-32 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full">
        See More
      </button>
    </div>
    </div>
      <product-recycle-card></product-recycle-card>
    </div>
  </div>
</template>

<script>
// import NavTop from '@/components/NavTop.vue';
export default {
  methods: {
    navigateToListingProduct() {
      // Programmatically navigate to /listing-product route
      this.$router.push('/listing-product');
    },
  },
 
};
</script>

