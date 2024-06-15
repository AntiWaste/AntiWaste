<template>
  <top-cate />
  <waste-cate />
</template>

<script>
import TopCate from '../components/Waste/TopCate.vue';
import WasteCate from '../components/Waste/WasteCates.vue';
export default {
  components: {
    WasteCate,
    TopCate,
  },
};
</script>
