<template>
  <v-app>
    <div class="container">
      <v-img
        class="img"
        src="https://www.ptecologicalservices.com/assets/images/products/organicwasteconvertor.gif"
      ></v-img>
    </div>

    <div class="font-weight-bold text-h4 text-center pt-10">Our Clients</div>

    <div class="slider pt-5">
      <p class="text-center">
        We have been working with some community who working on zero waste
      </p>
      <div class="slide-track">
        <div class="slide" v-for="(client, index) in communities" :key="index">
          <img :src="client.img" height="100" width="250" />
        </div>
      </div>

      <!-- <div class="slide-track">
        <div class="slide" v-for="(client, index) in clients" :key="index">
          <img :src="client.img" height="100" width="250" class="ma-10" />
        </div>
      </div> -->
    </div>

    <trash-center />
    <about-us />
    <trust-user />
    <how-to />
    <founder-web />
    <faq-ques />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      clients: [
        {
          id: 1,
          img: [require('../../assets/Sticker_icon/Cintri-cambodia-logo.png')],
        },
        {
          id: 2,
          img: [require('../../assets/Sticker_icon/800-super-Gaea-logo.png')],
        },

        {
          id: 2,
          img: [require('../../assets/Sticker_icon/mizuda-logo.jpg')],
        },
        {
          id: 2,
          img: [require('../../assets/Sticker_icon/ClearCambodiaLogo.jpg')],
        },
        {
          id: 2,
          img: [require('../../assets/Sticker_icon/ODC-New-logo.png')],
        },
        {
          id: 2,
          img: [
            require('../../assets/Sticker_icon/waste-summit-cambodia-logo.png'),
          ],
        },
      ],
      communities: [
        {
          id: 1,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
        },
        {
          id: 2,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
        },
        {
          id: 3,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
        },
        {
          id: 4,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
        },
        {
          id: 5,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
        },
        {
          id: 6,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
        },
        {
          id: 7,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
        },
        {
          id: 1,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
        },
        {
          id: 2,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
        },
        {
          id: 3,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
        },
        {
          id: 4,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
        },
        {
          id: 5,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
        },
        {
          id: 6,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
        },
        {
          id: 7,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
        },
      ],
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

/* .logo-carousel {
  display: flex;
  max-width: 600px;
  margin: auto;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
}

.logo-image {
  display: flex;
  width: 250px;
  height: 100px;
  margin-right: 10px;
} */

/* 
.aspect-ratio {
  position: relative;
}

.aspect-ratio:before {
  display: block;
  content: "";
  width: 100%;
}

.carousel {
  display: block;
  text-align: left;
  position: relative;
  margin-bottom: 22px;
}

.carousel > input {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

.carousel > input:nth-of-type(6):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -500%;
}

.carousel > input:nth-of-type(5):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -400%;
}

.carousel > input:nth-of-type(4):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -300%;
}

.carousel > input:nth-of-type(3):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -200%;
}

.carousel > input:nth-of-type(2):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: -100%;
}

.carousel > input:nth-of-type(1):checked ~ .carousel__slides .carousel__slide:first-of-type {
  margin-left: 0%;
}

.carousel > input:nth-of-type(1):checked ~ .carousel__thumbnails li:nth-of-type(1),
.carousel > input:nth-of-type(2):checked ~ .carousel__thumbnails li:nth-of-type(2),
.carousel > input:nth-of-type(3):checked ~ .carousel__thumbnails li:nth-of-type(3),
.carousel > input:nth-of-type(4):checked ~ .carousel__thumbnails li:nth-of-type(4),
.carousel > input:nth-of-type(5):checked ~ .carousel__thumbnails li:nth-of-type(5),
.carousel > input:nth-of-type(6):checked ~ .carousel__thumbnails li:nth-of-type(6) {
  box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5);
}

.carousel__slides {
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
}

.carousel__slide {
  position: relative;
  display: block;
  flex: 1 0 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 300ms ease-out;
  vertical-align: top;
  box-sizing: border-box;
  white-space: normal;
}

.carousel__slide figure {
  display: flex;
  margin: 0;
}

.carousel__slide div {
  position: relative;
}

.carousel__slide img {
  display: block;
  flex: 1 1 auto;
  object-fit: cover;
}

.carousel__slide figcaption {
  align-self: flex-end;
  padding: 20px 20px 0 20px;
  flex: 0 0 auto;
  width: 25%;
  min-width: 150px;
}

.carousel__slide .credit {
  margin-top: 1rem;
  color: rgba(0, 0, 0, 0.5);
  display: block;        
}

.carousel__slide.scrollable {
  overflow-y: scroll;
}

.carousel__thumbnails {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 0 -10px;
}

.carousel__thumbnails + .carousel__slides {
  margin-top: 20px;
}

.carousel__thumbnails li {
  flex: 1 1 auto;
  max-width: calc((100% / 6) - 20px);
  margin: 0 10px;
  transition: all 300ms ease-in-out;
}

.carousel__thumbnails label {
  display: block;
}

.carousel__thumbnails label:hover,
.carousel__thumbnails label:focus {
  cursor: pointer;
}

.carousel__thumbnails label img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
</style>
