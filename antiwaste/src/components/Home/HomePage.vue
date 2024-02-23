<template>
<NavTop />
<div>
    <v-img class="img" src="https://www.ptecologicalservices.com/assets/images/products/organicwasteconvertor.gif"></v-img>
</div>
<div class="font-weight-bold text-h4 text-center pt-10">
    Our Client
</div>
<p class=" text-center pt-5">We have been working with some community who working on zero waste
</p>
<!-- LogoCarousel.vue -->
<div class="logo-carousel">
    <b-carousel-slide>
        <!-- v-for="(logo, index) in logos" :key="index" -->
        <div class="d-flex">
            <v-img src="../../assets/event/image 39 (2).png" alt="Logo" class="logo-image"></v-img>
            <v-img src="../../assets/event/image 40 (2).png" alt="Logo" class="logo-image"></v-img>
            <v-img src="../../assets/logos/image 38 (1).png" alt="Logo" class="logo-image"></v-img>
            <v-img src="../../assets/event/image 41 (2).png" alt="Logo" class="logo-image"></v-img>
            <v-img src="../../assets/event/image 42 (2).png" alt="Logo" class="logo-image"></v-img>
            <v-img src="../../assets/event/image 43 (2).png" alt="Logo" class="logo-image"></v-img>
            <!-- <v-img src="../../assets/event/image 44 (1).png" alt="Logo" class="logo-image"></v-img> -->
        </div>
    </b-carousel-slide>
</div>
<TrashCenter />
<AboutUs />
<TrustUser />
<RecycleView />
<FounderWeb />
<FaqQues />
</template>

<style scoped>
.logo-carousel {
    display: flex;
    max-width: 600px;
    /* Adjust the maximum width of the carousel */
    margin: auto;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
}

.logo-image {
    display: flex;
    width: 250px;
    height: 100px;
    margin-right: 10px;
}
</style>

<script>
import AboutUs from '@/components/Home/AboutUs.vue';
import TrashCenter from '../Home/TrashCenter.vue';
import TrustUser from '../Home/TrustUser.vue';
import NavTop from '../NavTop.vue';
import FaqQues from './FaqQues.vue';
import FounderWeb from './FounderWeb.vue';
import RecycleView from './RecycleView.vue';
export default {
    components: {
        TrashCenter,
        NavTop,
        FaqQues,
        AboutUs,
        TrustUser,
        RecycleView,
        FounderWeb,
    },
    data() {
        return {}
    },
}
</script>
