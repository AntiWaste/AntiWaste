<template>
<div class="font-weight-bold text-h4 text-center pt-10">
    Top categories of Recycling
</div>
<p class="text-center pt-5 pb-5 ">Click the block below to find where you can sell your trash follow categories that can use for recycling
</p>
<v-container class="pa-6 text-center">
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(item, i) in items" :key="i">
        <v-col
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
            >
              <v-img
                :src="item.img"
                height="300px"
                cover
              >
                <v-card-title class="text-h6 text-black d-flex flex-column">
                  <h2 class="mt-4">
                    {{ item.title }}
                  </h2>

                  <!-- <div>
                    <p class="ma-0 text-body-1 font-weight-bold">
                      {{ item.text }}
                    </p>
                    <p class="text-caption font-weight-medium">
                      {{ item.subtext }}
                    </p>
                  </div> -->
                </v-card-title>
                <!-- <div class="align-center w-auto">
                  <v-btn>see more</v-btn>
                </div> -->
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 0.6;
  }
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
  }
</script>