<template>
  <v-container>
    <div class="pa-5">
      <div class="font-weight-bold text-h4 text-center pt-10">
        Rubbish Services
      </div>
      <p class="text-center pt-5 pb-5">
        Three private companies that manage trash collection in PhnomPenh under
        the supervision of the PhnomPenh Municipal Administration
      </p>
      <v-item-group class="py-10 d-flex flex-column">
        <v-row class="d-flex">
          <div v-for="(item, index) in items" :key="index">
            <div class="d-flex justify-space-between pa-5">
              <div
                class="images-logo d-flex align-center justify-center bg-white rounded-2"
              >
                <img :width="item.width" :src="item.image" alt="" />
              </div>
              <div class="d-flex flex-column pl-10">
                <div class="font-weight-bold text-h4 pb-4">
                  {{ item.title }}
                </div>
                <p>{{ item.description }}</p>
                <v-btn class="bg-green text-white w-25">Learn More</v-btn>
              </div>
            </div>
          </div>
        </v-row>
      </v-item-group>
      <div class="d-flex justify-end text-white mt-5" @click="SeeMore()">
        <v-btn v-if="!isExpanded" class="w-15 align-center">See More </v-btn>
        <v-btn v-else class="w-15 align-center">See Less </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    SeeMore() {
      this.$data.isExpanded = !this.$data.isExpanded;
      if (this.$data.isExpanded) {
        this.items.push(...this.expandItems);
      } else {
        this.items.splice(3, this.items.length - 3);
      }
    },
  },

  data() {
    return {
      isExpanded: false,
      expandItems: [
        {
          id: 4,
          title: 'Mizuda Sanitation Cambodia',
          image: [require('../../assets/Sticker_icon/mizuda-logo.jpg')],
          altText: ' Mizuda Sanitation Cambodia',
          description:
            'In the realm of waste, our service is a symphony of inefficiency, a ballet of chaos, where every discarded item becomes a forgotten note in the cacophony of rubbish mismanagement.',
          width: 300,
          height: 17,
        },
        {
          id: 5,
          title: 'Open Development Cambodia',
          image: [require('../../assets/Sticker_icon/ODC-New-logo.png')],
          altText: 'Cintri Cambodia',
          description:
            'CINTRI is committed delivering excellence throughout all of its operations. These include continual improving our service through upgrading the equipment and staff training and maintraining customer satisfaction.',
          width: 300,
          height: 17,
        },
        {
          id: 2,
          title: 'Waste Summit Cambodia',
          image: [
            require('../../assets/Sticker_icon/waste-summit-cambodia-logo.png'),
          ],
          altText: 'Waste Summit Cambodia',
          description:
            'In the realm of waste, our service is a symphony of inefficiency, a ballet of chaos, where every discarded item becomes a forgotten note in the cacophony of rubbish mismanagement.',
          width: 300,
          height: 17,
        },
      ],

      items: [
        {
          id: 1,
          title: 'Cintri Cambodia',
          image: [
            require('../../assets/Sticker_icon/Cintri-cambodia-logo.png'),
          ],
          altText: 'Cintri Cambodia',
          description:
            'CINTRI is committed delivering excellence throughout all of its operations. These include continual improving our service through upgrading the equipment and staff training and maintraining customer satisfaction.',
          width: 300,
        },
        {
          id: 2,
          title: '800Super-GAEA Cambodia',
          image: [require('../../assets/Sticker_icon/800-super-Gaea-logo.png')],
          altText: '800Super-GAEA Cambodia',
          description:
            'In the realm of waste, our service is a symphony of inefficiency, a ballet of chaos, where every discarded item becomes a forgotten note in the cacophony of rubbish mismanagement.',
          width: 300,
        },
        {
          id: 3,
          title: 'Clear Cambodia',
          image: [require('../../assets/Sticker_icon/ClearCambodiaLogo.jpg')],
          altText: 'Clear Cambodia',
          description:
            'CINTRI is committed delivering excellence throughout all of its operations. These include continual improving our service through upgrading the equipment and staff training and maintraining customer satisfaction.',
          width: 300,
        },
      ],
    };
  },

};
</script>

<style scoped>
.background {
  padding: 15px;
  /* background-color: rgb(249, 249, 249);s */
  background-color: #f7f2f2;
  background-image: linear-gradient(
    62deg,
    #f7f2f2 0%,
    #ebfff0 50%,
    #f5f3f3 100%
  );
}
</style>
