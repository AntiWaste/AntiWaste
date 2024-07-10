<template>
  <div>
    <h2>Checkout</h2>
    <div v-if="loading">Loading...</div>
    <form @submit.prevent="handleSubmit">
      <div id="card-element"></div>
      <button type="submit" :disabled="loading">Pay</button>
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default {
  data() {
    return {
      stripe: null,
      cardElement: null,
      clientSecret: "",
      loading: false,
      error: "",
    };
  },
  async mounted() {
    this.stripe = await loadStripe("your-publishable-key-here");
    const elements = this.stripe.elements();
    this.cardElement = elements.create("card");
    this.cardElement.mount("#card-element");
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/create-payment-intent",
          {
            // Include any other necessary details like product ID, user ID, etc.
            amount: 1000, // Example amount in cents
          }
        );
        this.clientSecret = response.data.clientSecret;

        const result = await this.stripe.confirmCardPayment(this.clientSecret, {
          payment_method: {
            card: this.cardElement,
          },
        });

        if (result.error) {
          this.error = result.error.message;
        } else {
          if (result.paymentIntent.status === "succeeded") {
            // Payment succeeded, handle the success (e.g., show a success message, redirect, etc.)
            alert("Payment successful!");
          }
        }
      } catch (error) {
        this.error = error.response?.data?.message || "Payment failed";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles */
</style>
