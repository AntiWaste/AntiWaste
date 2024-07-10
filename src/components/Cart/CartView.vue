<template>
  <div>
    <h2>Shopping Cart</h2>
    <div v-if="cartItems.length === 0">Your cart is empty</div>
    <ul v-else>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.product.name }} - {{ item.quantity }}
        <button @click="removeFromCart(item.id)">Remove</button>
        <input
          type="number"
          v-model.number="item.quantity"
          @change="updateQuantity(item)"
          min="1"
        />
      </li>
    </ul>
    <button @click="checkout" v-if="cartItems.length != 0">Checkout</button>
  </div>
</template>

<script>
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default {
  data() {
    return {
      cartItems: [],
      stripe: null,
    };
  },
  created() {
    this.fetchCartItems();
    this.setupStripe();
  },
  methods: {
    async setupStripe() {
      this.stripe = await loadStripe("your-publishable-key-here");
    },
    fetchCartItems() {
      axios.get("/api/cart-items").then((response) => {
        this.cartItems = response.data;
      });
    },
    removeFromCart(id) {
      axios.delete(`/api/cart-items/${id}`).then(() => {
        this.cartItems = this.cartItems.filter((item) => item.id !== id);
      });
    },
    updateQuantity(item) {
      axios
        .put(`/api/cart-items/${item.id}`, { quantity: item.quantity })
        .then((response) => {
          const updatedItem = response.data;
          const index = this.cartItems.findIndex(
            (i) => i.id === updatedItem.id
          );
          this.$set(this.cartItems, index, updatedItem);
        });
    },
  },
};
</script>
