<template>
  <div>
    <div class="h-screen bg-gradient-to-r from-gray-100 via-green-100 to-gray-200 flex items-center justify-between p-4">
      <div class="flex flex-col md:flex-row items-center justify-between w-full h-full">
        <img
          class="w-full md:w-1/2 p-6 object-cover"
          :src="require('@/assets/event/pngguru 2.png')"
          alt="Event Image"
        />
        <div class="flex flex-col items-center md:items-start justify-center mb-8 h-full text-center md:text-left">
          <div class="text-4xl font-bold mb-4">Waste Summit Cambodia</div>
          <p class="py-5 mx-auto md:mx-0">
          Only 2 days left until the Waste Summit 2024! Don't forget to join
            us at the Waste Summit this Saturday 13th May.
          </p>
          <button @click="scrollToTicketSection" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
            Get Ticket Now
          </button>
        </div>
      </div>
    </div>
    <UpEvent />
    <PostEvent />
    <let-chat />
  </div>
</template>

<script>
import PostEvent from '@/components/Event/PostEvent.vue';
import UpEvent from '@/components/Event/UpEvent.vue';

export default {
  components: {
    UpEvent,
    PostEvent,
  },
};
</script>
