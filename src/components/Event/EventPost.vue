<template>
  <div class="bg-white border rounded-lg shadow relative m-10">
    <div class="flex items-start justify-between p-5 border-b rounded-t">
      <h3 class="text-2xl font-semibold">Post Your Event Now!</h3>
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
      <form @submit.prevent="createEvent">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="event-name" class="text-sm font-medium text-gray-900 block mb-2">Event Name</label>
            <input
              v-model="eventName"
              type="text"
              name="event-name"
              id="event-name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              placeholder="Waste Summit"
              required
            />
          </div>
          <div class="col-span-6">
            <label for="event-description" class="text-sm font-medium text-gray-900 block mb-2">Event Description</label>
            <textarea
              v-model="eventDescription"
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
              v-model="eventDate"
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
              v-model="eventLocation"
              type="text"
              name="event-location"
              id="event-location"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              placeholder="New York, USA"
              required
            />
          </div>
          <div class="col-span-6">
            <label for="event-images" class="text-sm font-medium text-gray-900 block mb-2">Event Photo</label>
            <input
              type="file"
              name="event-images"
              id="event-images"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
              @change="onPhotoSelected"
              required
            />
          </div>
          <!-- Display selected images -->
          <div class="col-span-6" v-if="imagePreview">
            <h3 class="text-lg font-medium">Selected Image:</h3>
            <div class="relative">
              <img :src="imagePreview" alt="Selected Image" class="mt-2 max-h-48 rounded-lg" />
              <button
                @click="removeImage"
                class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
              >
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="p-6 border-t border-gray-200 rounded-b">
      <button
        class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        @click="createEvent"
      >
        Post Event
      </button>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      eventName: '',
      eventDescription: '',
      eventDate: '',
      eventLocation: '',
      eventImages: null,
      imagePreview: null,
    };
  },
  methods: {
    async createEvent() {
      const toast = useToast();
      try {
        const formData = new FormData();
        formData.append('event_name', this.eventName);
        formData.append('description', this.eventDescription);
        formData.append('date', this.eventDate);
        formData.append('location', this.eventLocation);
        formData.append('photo', this.eventImages);

        const response = await axios.post(`${API_BASE_URL}events`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log("Event saved successfully:", response.data);
        toast.success("Event saved successfully!");
        this.resetForm();
        this.$router.push("/thank-event"); // Navigate to the Thank You page
      } catch (error) {
        console.error("Error saving event:", error);
        toast.error("Error saving event. Please try again later.");
      }
    },
    onPhotoSelected(event) {
      const file = event.target.files[0];
      this.eventImages = file;
      this.imagePreview = URL.createObjectURL(file);
    },
    removeImage() {
      this.eventImages = null;
      this.imagePreview = null;
    },
    resetForm() {
      this.eventName = '';
      this.eventDescription = '';
      this.eventDate = '';
      this.eventLocation = '';
      this.eventImages = null;
      this.imagePreview = null;
    },
    navigateBack() {
      this.$router.go(-1);
    },
  },
};
</script>
