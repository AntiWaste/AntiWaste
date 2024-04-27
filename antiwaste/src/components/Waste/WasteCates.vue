<template>
  <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-header text-center">
          <h2 class="fw-bold fs-1">
            Our
            <span class="b-class-secondary">Top categories of </span>Recycling
          </h2>
          <p class="sec-icon"><i class="fa-solid fa-gear"></i></p>
        </div>
      </div>
      <div
        class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center"
      >
        <div class="col">
          <div class="service-card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <h3>Metal</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="service-card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-arrows-down-to-people"></i>
            </div>
            <h3>Plastic</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="service-card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-globe"></i>
            </div>
            <h3>Organic</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="service-card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-money-check-dollar"></i>
            </div>
            <h3>Glass</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="service-card">
            <div class="icon-wrapper">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <h3>Paper</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="service-card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-people-group"></i>
            </div>
            <h3>E-Waste</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <v-container>
    <v-row>
      <v-col>
        <img
          src="https://www.wastesorted.wa.gov.au/assets/gfx/der138-wastesorted-website-768-x-5002.jpg"
          alt="Product Image"
          class="product-image"
          width="500px"
        />
      </v-col>

      <v-col>
        <div>
          <v-card-title class="headline pt-5"
            >How to post recycling product and reach customer?</v-card-title
          >
          <v-card-text>
            <p class="pt-5 text-center text-md-left">
              Highlight the Eco-friendly and sustainable aspects of your
              recycling products. Emphasize their role in reducing waste,
              conserving resources, and promoting a circular economy. Use vivid
              language and captivating images to showcase the products' unique
              features and benefits.
            </p>
            <p>
              Attract new customers and encourage repeat purchases by offering
              discounts, loyalty programs, and special promotions. Consider
              bundling products, offering free shipping, or providing incentives
              for referrals.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" @click="learnMore">Learn More</v-btn>
          </v-card-actions>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.sec-icon {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0 auto;
}

.sec-icon::before {
  content: '';
  position: absolute;
  height: 1px;
  left: -70px;
  margin-top: -5.5px;
  top: 60%;
  background: #333333;
  width: 50px;
}

.sec-icon::after {
  content: '';
  position: absolute;
  height: 1px;
  right: -70px;
  margin-top: -5.5px;
  top: 60%;
  background: #333;
  width: 50px;
}

.advertisers-service-sec {
  background-color: #f5f5f5;
}

.advertisers-service-sec span {
  color: rgb(4, 176, 24);
}

.advertisers-service-sec .col {
  padding: 0 1em 1em 1em;
  text-align: center;
}

.advertisers-service-sec .service-card {
  width: 100%;
  height: 100%;
  padding: 2em 1.5em;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  z-index: 2;
  overflow: hidden;
  background: #fff;
}

.advertisers-service-sec .service-card::after {
  content: '';
  width: 100%;
  height: 100%;
  background: linear-gradient(#0dcaf0, rgb(23, 255, 35));
  position: absolute;
  left: 0%;
  top: -98%;
  z-index: -2;
  transition: all 0.4s cubic-bezier(0.77, -0.04, 0, 0.99);
}

.advertisers-service-sec h3 {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 600;
  color: #1f194c;
  margin: 1em 0;
  z-index: 3;
}

.advertisers-service-sec p {
  color: #575a7b;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.03em;
  z-index: 3;
}

.advertisers-service-sec .icon-wrapper {
  background-color: #2c7bfe;
  position: relative;
  margin: auto;
  font-size: 30px;
  height: 2.5em;
  width: 2.5em;
  color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
  z-index: 3;
}

.advertisers-service-sec .service-card:hover:after {
  top: 0%;
}

.service-card .icon-wrapper {
  background-color: #ffffff;
  color: rgb(255, 23, 131);
}

.advertisers-service-sec .service-card:hover .icon-wrapper {
  color: #0dcaf0;
}

.advertisers-service-sec .service-card:hover h3 {
  color: #ffffff;
}

.advertisers-service-sec .service-card:hover p {
  color: #f0f0f0;
}

/* carousel slider */
</style>
<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Glasses',
        img: require('../../assets/event/glass.png'),
      },
      {
        title: 'Plastics',
        img: require('../../assets/event/plastic.png'),
      },
      {
        title: 'Metals',
        img: require('../../assets/event/mental.png'),
      },
      {
        title: 'Papers',
        img: require('../../assets/event/paper.png'),
      },
      {
        title: 'E-Waste',
        img: require('../../assets/event/E-waste.png'),
      },
      {
        title: 'Textiles',
        img: require('../../assets/event/textile.png'),
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
};
</script>
