<template>
  <div class="register-form">
    <h1>Register</h1>
    <div class="register">
      <div class="register-left">
        <img
          src="https://img.freepik.com/free-vector/people-recycling-together_23-2148520835.jpg?w=1060&t=st=1704798340~exp=1704798940~hmac=ba277727527a9ab253f49db3ccc3b6eb2795102bd40010253f9d2ed8b0b39eff"
          alt=""
          width="400"
        />
      </div>
      <form @submit.prevent="register" class="from" width="400">
        <div class="register-left-text">
          <h3>Welcome</h3>
          <p>You are 30 seconds away from earning your own money!</p>
          <button type="submit">Login</button>
        </div>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="password">Phone:</label>
          <input type="password" id="password" v-model="phone" required />
        </div>
        <div class="form-group">
          <label for="role">Role:</label>
          <select id="role" v-model="role" required>
            <option value="">Select Role</option>
            <option value="normal-user">Normal User</option>
            <option value="admin">Admin</option>
            <option value="service-provider">Service Provider</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      role: '',
    };
  },
  methods: {
    register() {
      // Perform registration logic here
      console.log('Registration submitted');
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Role:', this.role);
    },
  },
};
</script>

<style scoped>
.register-form {
  width: 100%;
  height: 88vh;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  border: 1px solid gray;
}
.register {
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
}
.register-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register-left img {
  width: 450px;
  height: 500px;
  object-fit: cover;
}
.register-left-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.register-left-text h3 {
  margin-bottom: 20px;
}
.register-left-text p {
  margin-bottom: 20px;
}
.from {
  display: flex;
  flex-direction: column;
  width: 400px;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-group select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.from button {
  width: 100%;
  padding: 10px;
  background-color: #00aa33;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.from button:hover {
  background-color: #0056b3;
}
</style>
