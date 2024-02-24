<template>
  <div class="background">
    <v-container>
      <div class="font-weight-bold text-h4 text-center py-10">
        Helping a local zero waste A Collaborative for a Sustainable Future
      </div>
      <v-flex>
        <v-row>
          <v-col
            v-for="statistic in statistics"
            :key="statistic.label"
            cols="12"
            md="3"
          >
            <div class="statistic">
              <v-icon class="value-icon">{{ statistic.icon }}</v-icon>
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
          label: "Users on our website",
          value: "10,000+",
          icon: "fas fa-user",
        },
        {
          label: "Trustworthy community members",
          value: "8,500+",
          icon: "fas fa-check-circle",
        },
        {
          label: "Products listed for sale",
          value: "5,000+",
          icon: "fas fa-box-open",
        },
        {
          label: "Products purchased",
          value: "3,000+",
          icon: "fas fa-shopping-cart",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
  background-color: rgb(249, 249, 249);
}

/* Add more custom styles as needed */
</style>
