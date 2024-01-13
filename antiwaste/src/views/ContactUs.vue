<template>
    <v-container fluid>
      <v-row justify="center" align="center" class="contact-us-background">
        <v-col cols="12" md="6" class="text-center">
          <h2 class="display-2 white--text">Contact Us</h2>
          <p class="subheading white--text">Feel free to get in touch with us!</p>
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
            <h5><strong>Email:</strong> info@example.com</h5>
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
  
  <style scoped>
  /* Add your custom styles here */
  .contact-us-background {
    background: url(https://i0.wp.com/simplybuckhead.com/wp-content/uploads/2022/01/iStock-1218891327-e1641412250782.jpg?fit=1200%2C489&ssl=1) center/cover no-repeat;
    height: 400px; /* Adjust the height as needed */
  }
  </style>
  