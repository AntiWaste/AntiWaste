<template>
  <div class="background">
    <v-container>
      <div class="font-weight-bold text-h4 text-center py-10 typewriter">
        Helping a local zero waste a Collaborative for a Sustainable Future
      </div>
      <v-flex>
        <v-row>
          <v-col
            v-for="statistic in statistics"
            :key="statistic.label"
            cols="12"
            md="3"
          >
            <div class="statistic ma-5">
              <v-icon class="value-icon ma-5">{{ statistic.icon }}</v-icon>
              <div class="value">{{ statistic.value }}</div>
              <div class="label">{{ statistic.label }}</div>
            </div>
          </v-col>
        </v-row>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statistics: [
        {
          label: 'Users on our website',
          value: '10,000+',
          icon: 'fa fa-users',
        },
        {
          label: 'Trustworthy community members',
          value: '8,500+',
          icon: 'fa fa-check-circle',
        },
        {
          label: 'Products listed for sale',
          value: '5,000+',
          icon: 'fa fa-cube',
        },
        {
          label: 'Products purchased',
          value: '3,000+',
          icon: 'fa fa-shopping-cart',
        },
      ],
    };
  },
};
</script>

<style scoped>
.typewriter {
  color: #4ba600;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.headline {
  font-size: 24px;
  font-weight: bold;
  /* margin-bottom: 16px; */
}

.statistic {
  text-align: center;
  margin: 8px;
}

.value-icon {
  font-size: 36px;
  color: #25f321;
  /* Adjust the color as needed */
}

.value {
  font-size: 18px;
  font-weight: bold;
}

.label {
  margin-top: 8px;
  color: #888;
}

.background {
  /* background-color: rgb(249, 249, 249);s */
  background-color: #f7f2f2;
  background-image: linear-gradient(
    62deg,
    #f7f2f2 0%,
    #ebfff0 50%,
    #ebe8e8 100%
  );
}

/* Add more custom styles as needed */
</style>
