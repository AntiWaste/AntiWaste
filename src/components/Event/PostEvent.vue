<template>
  <div class="h-screen flex items-center bg-gradient-to-r from-gray-100 via-green-100 to-gray-200">
    <div class="flex flex-col md:flex-row items-center justify-between p-4 w-full h-full">
      <img
        class="w-full md:w-1/2 p-6 object-cover"
        :src="require('@/assets/event/image 3 (1).png')"
        alt="Event Image"
      />
      <div class="flex flex-col items-center md:items-start justify-center mb-8 md:text-left w-full md:w-1/2">
        <h2 class="text-4xl font-bold mb-4">Make your own event</h2>
        <p class="flex flex-wrap mb-4 ">
          Create events to inspire people to take action and make changes in
          their own lives. Educate people about the different types of waste and
          how to manage them.
        </p>
        <div>
          <router-link to="/event-post"
            class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Create Event
          </router-link>
          <!-- <router-link to="/" class="bg-gray-50 ml-4 px-4 py-2 rounded-lg text-green-500 hover:bg-gray-500 hover:text-green-600">
            See More
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToCreateEvent() {
      this.$router.push({ name: 'CreateEvent' });
    },
  },
};
</script>

