<template>
  <v-app>
    <router-view />
    <footer-view />
  </v-app>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      user: null,
    };
  },
  // async created() {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     await axios
  //       .get('user', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         this.user = res.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // },
};
</script>
<style scoped>
@keyframes slides {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.slider {
  background: rgb(82, 221, 106);
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 1260px;
}

.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: '';
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slide {
  height: 100px;
  width: 250px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
</style>
