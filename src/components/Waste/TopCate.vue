<template>
  <v-app>
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows="hover"
      class="relative"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <div class="h-full">
      <v-img class="blur-4 h-full" :src="colors[i]" cover @error="handleImageError"></v-img>
        <div class="absolute inset-0 flex items-center justify-center text-white bg-opacity-50">
            <div class="text-center">
              <h2 class="font-bold text-4xl mb-4">{{ slide }}</h2>
            </div>
          </div></div>
     
          
        
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'https://www.russellkennedy.com.au/Images/UserUploadedImages/262/Pollution%20at%20beach%201900x500.jpg',
        'https://i.pinimg.com/564x/68/93/03/689303c4028460cd5f013d43c9dca93f.jpg',
        'https://png.pngtree.com/background/20210710/original/pngtree-world-environment-day-background-june-5-picture-image_1003798.jpg',
        'https://media.istockphoto.com/id/1454158817/photo/black-trash-bag-full-of-garbage-on-light-blue-background-space-for-text.jpg?s=612x612&w=0&k=20&c=4s5u3Mb9ZU7KxJ-0bavUUVPk4OnjnIoVFPkqD9MM02g=',
      ],
      slides: [
        'Zero-Waste Lifestyle in Cambodia',
        'Reduce, Reuse, Recycle',
        'Promoting Sustainable Living',
        'Transforming Waste into Resources',
      ],
    };
  },
  methods: {
    handleImageError(event) {
      console.error('Image failed to load:', event.target.src);
      // Optionally, you can set a fallback image here
      // event.target.src = '/path/to/fallback-image.jpg';
    },
  },
};
</script>
