<template>
  <div class="bg-white">
    <div class="container mx-auto p-6">
      <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-10">
        <img
          class="w-[350px]"
         :src="require('../../assets/event/image 9.png')"
          alt="Waste Management Image"
        />
        <div class="flex flex-col justify-center space-y-4">
          <p class="text-base sm:text-lg lg:text-xl leading-relaxed">
            Waste management is one of the most important environmental
            protection strategies. The main benefits of waste management are to
            reduce pollution, conserve resources, and prevent damage to
            ecosystems. By properly disposing of waste, we can greatly reduce
            the number of harmful chemicals and pollutants that enter our water,
            air, and soil. This not only protects human health but also helps to
            preserve wildlife and habitats. In addition, effective waste
            management can also help to create jobs.
          </p>
          <h6 class="text-green-600 font-semibold">Mey Nana</h6>
          <p class="text-gray-500">Co-Founder of AntiWaste</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WasteManagement",
};
</script>