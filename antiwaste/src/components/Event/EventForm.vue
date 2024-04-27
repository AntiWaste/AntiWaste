<!-- <template>
  <v-sheet class="mx-auto" max-width="300">
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field
        v-model="title"
        :rules="rules"
        label="title"
      ></v-text-field>
      <v-text-field
        v-model="title"
        :rules="rules"
        label="title"
      ></v-text-field>

      <v-btn
        :loading="loading"
        class="mt-2"
        text="Submit"
        type="submit"
        block
      ></v-btn>
    </v-form>
  </v-sheet>
</template>
  
  <script>
export default {
  data: (vm) => ({
    loading: false,
    rules: [(value) => vm.checkApi(value)],
    timeout: null,
    title: "",
  }),

  methods: {
    async submit(event) {
      this.loading = true;

      const results = await event;

      this.loading = false;

      alert(JSON.stringify(results, null, 2));
    },
    async checkApi(title) {
      return new Promise((resolve) => {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          if (!title) return resolve("Please enter title.");
        }, 1000);
      });
    },
  },
};
</script> -->
<template>
  <v-container>
    <v-form @submit.prevent="submitEvent">
      <v-text-field
        v-model="event.title"
        label="Event Title"
        required
      ></v-text-field>
      <v-date-picker
        v-model="event.date"
        label="Event Date"
        required
      ></v-date-picker>
      <v-text-field
        v-model="event.maxParticipants"
        label="Max Number of Participants"
        type="number"
        required
      ></v-text-field>
      <v-text-field
        v-model="event.location"
        label="Location"
        required
      ></v-text-field>
      <v-text-field
        v-model="creatorName"
        label="Your Name"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Create Event</v-btn>
    </v-form>
  </v-container>
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