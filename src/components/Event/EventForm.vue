<template>
  <div class="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
    <form @submit.prevent="submitEvent" class="space-y-4">
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Event Title</label>
        <input
          id="title"
          v-model="event.title"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="date">Event Date</label>
        <input
          id="date"
          v-model="event.date"
          type="date"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="maxParticipants">Max Number of Participants</label>
        <input
          id="maxParticipants"
          v-model="event.maxParticipants"
          type="number"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="location">Location</label>
        <input
          id="location"
          v-model="event.location"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="creatorName">Your Name</label>
        <input
          id="creatorName"
          v-model="creatorName"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Event
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        title: "",
        date: null,
        maxParticipants: "",
        location: "",
      },
      creatorName: "",
    };
  },
  methods: {
    submitEvent() {
      // Here you can handle the form submission, e.g., sending the data to a backend server
      console.log("Event:", this.event);
      console.log("Creator Name:", this.creatorName);
    },
  },
};
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>
