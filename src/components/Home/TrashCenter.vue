<template>
  <div>
    <div class=" p-20 bg-gradient-to-r from-gray-100 via-green-100 to-gray-200 shadow-lg rounded-lg">
      <div class="flex items-center justify-between">
    <!-- Left section with text content -->
    <div class="flex flex-col items-center justify-center mx-auto">
      <div class="font-bold text-4xl text-center mb-5">
        Rubbish Services
      </div>
      <p class="text-center text-gray-700 mb-10">
        Discover three private companies that manage trash collection in Phnom Penh under the supervision of the Phnom Penh Municipal Administration.
      </p>
    </div>

    <!-- Right section with button -->
    <div>
      <v-btn @click="toggleExpansion()" class="w-32 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full">
        {{ isExpanded ? 'See Less' : 'See More' }}
      </v-btn>
    </div>
    </div>
      <v-row>
        <template v-for="item in displayedItems" :key="item.id">
          <v-col cols="12" md="4">
            <div class="flex flex-col items-center justify-between p-5">
              <div class="w-full h-48 overflow-hidden">
                <img :src="requireImage(item.image)" :alt="item.altText" class="w-full h-auto object-cover" />
              </div>
              <div class="text-center mt-4">
                <div class="font-bold text-xl mb-2">{{ item.title }}</div>
                <p class="text-gray-700">{{ item.description }}</p>
                <v-btn class="mt-4 px-6 py-2 rounded-lg hover:bg-green-700">
                  Learn More
                </v-btn>
              </div>
            </div>
          </v-col>
        </template>
      </v-row>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      expandItems: [
        {
          id: 4,
          title: 'Mizuda Sanitation Cambodia',
          image: 'mizuda-logo.jpg',
          altText: 'Mizuda Sanitation Cambodia',
          description:
            'Explore efficient waste management solutions that aim to minimize environmental impact and improve community health.',
        },
        {
          id: 5,
          title: 'Open Development Cambodia',
          image: 'ODC-New-logo.png',
          altText: 'Open Development Cambodia',
          description:
            'Discover innovative approaches to waste collection and recycling initiatives that promote sustainability.',
        },
        {
          id: 2,
          title: 'Waste Summit Cambodia',
          image: 'waste-summit-cambodia-logo.png',
          altText: 'Waste Summit Cambodia',
          description:
            'Join the movement towards a cleaner city with comprehensive waste management strategies and eco-friendly practices.',
        },
      ],

      items: [
        {
          id: 1,
          title: 'Cintri Cambodia',
          image: 'Cintri-cambodia-logo.png',
          altText: 'Cintri Cambodia',
          description:
            'Discover how Cintri Cambodia ensures cleaner streets and better waste management services for Phnom Penh residents.',
        },
        {
          id: 2,
          title: '800Super-GAEA Cambodia',
          image: '800-super-Gaea-logo.png',
          altText: '800Super-GAEA Cambodia',
          description:
            'Learn about 800Super-GAEA Cambodia’s commitment to environmental sustainability through efficient waste solutions.',
        },
        {
          id: 3,
          title: 'Clear Cambodia',
          image: 'ClearCambodiaLogo.jpg',
          altText: 'Clear Cambodia',
          description:
            'Explore Clear Cambodia’s mission to provide reliable and eco-friendly waste management services across the city.',
        },
      ],
    };
  },

  computed: {
    displayedItems() {
      return this.isExpanded ? this.items.concat(this.expandItems) : this.items.slice(0, 3);
    }
  },

  methods: {
    toggleExpansion() {
      this.isExpanded = !this.isExpanded;
    },

    requireImage(imagePath) {
      return require(`@/assets/Sticker_icon/${imagePath}`);
    },
  },
};
</script>
