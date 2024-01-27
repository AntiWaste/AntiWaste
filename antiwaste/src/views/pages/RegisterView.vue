<template>
  <div class="form">
    <img src="" alt="">
    <form action="">
      <h2>Register</h2>
      <div class="inputBox">
        <input type="text" name="" required="">
        <label>Username</label>
      </div>
      <div class="inputBox">
        <input type="email" name="" required="">
        <label>Email</label>
      </div>
      <div class="inputBox">
        <input type="password" name="" required="">
        <label>Password</label>
      </div>
      <div class="inputBox">
        <input type="password" name="" required="">
        <label>Confirm Password</label>
      </div>
      <div class="inputBox">
        <input type="submit" name="" value="Sign Up">
      </div>
      <p class="signup">Already have an account? <a href="#">Sign In</a></p>
    </form>
    
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
