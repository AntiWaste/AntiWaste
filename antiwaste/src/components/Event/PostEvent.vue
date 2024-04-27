<template>
  <div class="h-screen align-center bg-green-lighten-4">
    <div class="d-flex justify-space-between align-center p-4 h-screen">
      <v-img
        cover
        class="p-6"
        width="auto"
        height="auto"
        src="../../assets/event/image 3 (1).png"
      ></v-img>
      <div class="d-flex flex-column">
        <h2 class="pa-md-2 display-6 font-weight-bold">Make you own event</h2>
        <p class="pa-md-2 mx-lg-auto">
          By create events to inspire people to take action and make changes in
          their own lives.And also educate people about the diffirent types of
          waste and how to manage them
        </p>
        <div>
          <v-btn class="text-white bg-green rounded-lg"
            ><a @click="this.$router.push('create-event')"
              >Create Event</a
            ></v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>
