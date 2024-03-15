<template>
  <div>
    <!-- <NavTop/> -->
    <EventTop />
    <FooterView />
  </div>
</template>
<script>
import EventTop from "@/components/Event/EventTop.vue";
// import NavTop from '@/components/NavTop.vue';
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    // NavTop,
    EventTop,
    FooterView,
  },
};
</script>
