<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="headline text-center">Contact Us</h1>
          <p class="text-center">We'd love to hear from you. Reach out using the form below or contact us through other means.</p>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="6">
          <!-- Your Contact Form Goes Here -->
          <v-form @submit.prevent="submitForm">
            <v-text-field v-model="name" label="Name" required></v-text-field>
            <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
            <v-textarea v-model="message" label="Message" required></v-textarea>
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-col>
  
        <v-col cols="12" md="6">
          <!-- Additional Contact Information Goes Here -->
          <v-card>
            <v-card-title>Contact Information</v-card-title>
            <v-card-text>
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Main Street, Cityville, State, Country</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        // Add logic to handle form submission
        console.log('Form submitted!', this.name, this.email, this.message);
      },
    },
  };
  </script>
  