<template>
  <div class="nav d-flex justify-space-between pa-4">
      <div class="justify-center text-black font-weight-bold "> Anti Waste</div>
      <ul class="ul">
          <li class="li">
              <a class="a" href="/">Home</a>
          </li>
          <li class="li">
              <a href="/waste" class="a">Waste</a>
          </li>
          <li class="li">
              <a href="/recycle" class="a">Recycle</a>
          </li>
          <li class="li">
              <a href="/event" class="a">Event</a>
          </li>
          <li class="li">
              <a href="/contact" class="a">Contact</a>
          </li>
          <li class="li">
              <a href="/login" class="a">Sign up</a>
          </li>
      </ul>
  </div>
  </template>
  
    
  <script>
  export default {
      name: "NavTop",
      components: {
          // NavTop,
      },
  };
  </script>
  
  <style scoped>
  nav {
      position: sticky;
      width: 100%;
  }
  
  ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
  }
  
  li a {
      color: grey;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }
  
  /* Change the link color to #111 (black) on hover */
  li a:hover {
      color: lightgreen;
  }
  
  /* .nav-link:hover{
    font-size: large;
    font-weight: 500;
  
  } */
  </style>