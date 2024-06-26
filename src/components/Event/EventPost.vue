<template>
    <div class="bg-white border rounded-lg shadow relative m-10">
      <div class="flex items-start justify-between p-5 border-b rounded-t">
        <h3 class="text-2xl font-semibold">
          Post Your Event
        </h3>
        <!-- Back Button -->
        <div class="px-5 pb-2">
          <button
            @click="navigateBack"
            class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none"
          >
            Back
          </button>
        </div>
      </div>
  
      <div class="p-6 space-y-6">
        <form @submit.prevent="saveEvent">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6">
              <label for="event-title" class="text-sm font-medium text-gray-900 block mb-2">Event Title</label>
              <input
                v-model="formData.eventTitle"
                type="text"
                name="event-title"
                id="event-title"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                placeholder="Waste Summit Cambodia"
                required
              />
            </div>
            <div class="col-span-6">
              <label for="event-description" class="text-sm font-medium text-gray-900 block mb-2">Event Description</label>
              <textarea
                v-model="formData.eventDescription"
                id="event-description"
                rows="6"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-4"
                placeholder="Details about the event..."
                required
              ></textarea>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="event-date" class="text-sm font-medium text-gray-900 block mb-2">Event Date</label>
              <input
                v-model="formData.eventDate"
                type="date"
                name="event-date"
                id="event-date"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                required
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="event-location" class="text-sm font-medium text-gray-900 block mb-2">Event Location</label>
              <input
                v-model="formData.eventLocation"
                type="text"
                name="event-location"
                id="event-location"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                placeholder="New York, USA"
                required
              />
            </div>
            <div class="col-span-6">
              <label for="event-image" class="text-sm font-medium text-gray-900 block mb-2">Event Image</label>
              <input
                type="file"
                name="event-image"
                id="event-image"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                @change="onImageSelected"
                required
              />
            </div>
          </div>
        </form>
      </div>
  
      <div class="p-6 border-t border-gray-200 rounded-b">
        <button
          class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="saveEvent"
        >
          Post Event
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useToast } from 'vue-toastification';
  
  export default {
    data() {
      return {
        formData: {
          eventTitle: '',
          eventDescription: '',
          eventDate: '',
          eventLocation: '',
          eventImage: null,
        }
      };
    },
    methods: {
      navigateBack() {
        this.$router.go(-1); // Navigate back to previous page
      },
      onImageSelected(event) {
        const file = event.target.files[0];
        if (file) {
          this.formData.eventImage = URL.createObjectURL(file);
        }
      },
      saveEvent() {
        // Perform form validation
        if (
          !this.formData.eventTitle ||
          !this.formData.eventDescription ||
          !this.formData.eventDate ||
          !this.formData.eventLocation ||
          !this.formData.eventImage
        ) {
          const toast = useToast();
          toast.error('Please fill in all required fields.');
          return;
        }
  
        // Handle save event logic
        console.log('Saving event:', this.formData);
        const toast = useToast();
        toast.success('Event posted successfully!');
        this.$router.push('/thank-you'); // Navigate to the Thank You page
      }
    }
  };
  </script>
  
  <style>
  /* Add any additional styles here */
  </style>
  