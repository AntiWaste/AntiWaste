<template>
  <div class="container mx-auto p-6">
    <form @submit.prevent="submitForm" class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      
      <!-- Name input -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-semibold text-gray-600">Name</label>
        <input v-model="formData.name" type="text" id="name" name="name" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50">
      </div>
      
      <!-- Email input -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-semibold text-gray-600">Email</label>
        <input v-model="formData.email" type="email" id="email" name="email" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50">
      </div>
      
      <!-- Message textarea -->
      <div class="mb-6">
        <label for="message" class="block text-sm font-semibold text-gray-600">Message</label>
        <textarea v-model="formData.message" id="message" name="message" rows="4" class="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"></textarea>
      </div>
      
      <!-- Submit button -->
      <div class="flex justify-center">
        <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config'; // Adjust the path based on your project structure
import axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      }
    };
  },
  methods: {
  async submitForm() {
    try {
      console.log('Form Data:', this.formData); // Log form data before sending
      const response = await axios.post(`${API_BASE_URL}contacts`, this.formData);

      if (response.status !== 201) {
        throw new Error('Failed to submit form');
      }

      // Clear form data after successful submission
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';

      // Show success toast
      const toast = useToast();
      toast.success('Form submitted successfully', {
        position: 'top-right',
        timeout: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 80,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error toast
      const toast = useToast();
      toast.error('Failed to submit form', {
        position: 'top-right',
        timeout: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 80,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
      });
    }
  }
}
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
