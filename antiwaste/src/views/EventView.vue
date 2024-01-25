<template>
    <div>
    <!-- <NavTop/> -->
    <EventTop/>
    <CardView />
    </div>
</template>
<script>
import CardView from '@/components/Event/CardView.vue';
import EventTop from '@/components/Event/EventTop.vue';
// import NavTop from '@/components/NavTop.vue';
export default {
    components: {
        // NavTop,
        CardView,
        EventTop,
    },
}
</script>