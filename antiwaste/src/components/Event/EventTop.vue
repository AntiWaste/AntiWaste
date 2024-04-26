<template>
  <div>
    <div class="h-screen align-center bg-green-lighten-4">
      <div class="d-flex justify-space-between align-center p-4 h-screen">
        <v-img
          cover
          class="p-6"
          width="auto"
          height="auto"
          src="../../assets/event/pngguru 2.png"
        ></v-img>
        <div
          class="d-flex flex-column align-center justify-center mb-8 fill-height"
        >
          <div class="display-6 font-weight-bold">Waste Summit Cambodia</div>
          <p class="pa-md-4 mx-lg-auto">
            Only 2 days left until the Waste Summit 2024! Don't forget to join
            us at the Waste Summit this Saturday 13th May.
          </p>
          <v-btn class="text-green-lighten-1"> get ticket </v-btn>
        </div>
      </div>
    </div>
    <UpEvent />
    <div>
      <PostEvent />
    </div>
  </div>
</template>

<script>
import UpEvent from '@/components/Event/UpEvent.vue';
import PostEvent from '@/components/Event/PostEvent.vue';
export default {
  components: {
    UpEvent,
    PostEvent,
  },
};
</script>
