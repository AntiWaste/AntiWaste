<template>
<NavTop />
<v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img cover :src="colors[i]" height="100%">
            <div class="d-flex fill-height justify-center align-center  text-shades-white">
                <div class=" font-weight-bold text-h2">
                    {{ slide }}
                </div>
            </div>
        </v-img>
    </v-carousel-item>
</v-carousel>
<div class="font-weight-bold text-h3 text-center pt-10">
    Our Client
</div>
<p class=" text-center pt-5">We have been working with some community who working on zero waste
</p>
<!-- LogoCarousel.vue -->

<div class="logo-carousel">
  <b-carousel-slide v-for="(logo, index) in logos" :key="index">
        <img height="100" :src="logo" alt="Logo" class="logo-image" />
    </b-carousel-slide>
</div>
<AboutUs />
<TrashCenter />
<RecycleView />
<TrustUser />
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
    margin-right: 10px;
    padding-left: 60px;
}
</style>

<script>
import AboutUs from '@/components/Home/AboutUs.vue';
import TrashCenter from '../Home/TrashCenter.vue';
import TrustUser from '../Home/TrustUser.vue';
import NavTop from '../NavTop.vue';
import FaqQues from './FaqQues.vue';
import RecycleView from './RecycleView.vue';
export default {
    components: {
        TrashCenter,
        NavTop,
        FaqQues,
        AboutUs,
        TrustUser,
        RecycleView,
    },
    data() {
        return {
            colors: [
                'https://www.russellkennedy.com.au/Images/UserUploadedImages/262/Pollution%20at%20beach%201900x500.jpg',
                'https://png.pngtree.com/background/20211215/original/pngtree-world-environment-day-green-city-minimalist-environment-day-poster-background-picture-image_1478287.jpg',
                'https://png.pngtree.com/background/20210710/original/pngtree-world-environment-day-background-june-5-picture-image_1003798.jpg',
                // 'https://img.freepik.com/premium-vector/set-recycle-bins-trash-flat-design_115464-688.jpg?w=2000',
                'https://www.ptecologicalservices.com/assets/images/products/organicwasteconvertor.gif',
            ],
            slides: [
                'Zero-Waste Lifestyle in Cambodia',
                '',
                'Zero-Waste Lifestyle in Cambodia',
                '',
            ],
            slide: 0,
            logos: [
                'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/309054269_469756281865320_1198237228874157916_n.png?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHLRkfynlDoxDn66HDWhd4ZX7WkIC-SPutftaQgL5I-6-G-7QOZCiXbFvFJvp1v2WQNFyb1ANcgzYgJqm-CcKYh&_nc_ohc=rN-P0Y_jn7AAX8imzx1&_nc_ht=scontent.fpnh7-1.fna&oh=00_AfCtqjUG2t6e58nBB-H8QpvAVsrsJJ2u64547gfsy4wzkg&oe=65A72C4E',
                'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/302238214_593843995623801_3496526316642023480_n.png?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGimq-fWI7KgoRgqQcbtEVdDR4yKs_plwsNHjIqz-mXCx15Hkp2klU5of2zdf7XZH-P4ja0uX6v4yGEv94k5f84&_nc_ohc=zu8g6NJXhPoAX_o4U9w&_nc_ht=scontent.fpnh7-1.fna&oh=00_AfC7R9_QRpEmtpi-F-1w5_TUmgrmfmSCJgK20LHrwzNsOg&oe=65A72102',
                'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/327262989_866171237934149_5511609485466793982_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEuZ7uhjSDK51fqGYkwLaGlU5JEzMucwtFTkkTMy5zC0aXhsiwKthLDMk7HrdamRCL0fGnw0TMWfokZz7gkK3hs&_nc_ohc=KLz8DAtM9sAAX9QxJjv&_nc_ht=scontent.fpnh7-1.fna&oh=00_AfCaY3532Ck-XyT0H5dH-c4bje1zxYWLLolmYgzowMZBzw&oe=65A65BD3',
                'https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/337650685_1710460256077759_419226222432801336_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH58UTlpR4R_lLFhRPWXTjMamKfYXp-CjxqYp9hen4KPDWo3dNZ7C4uHTlyWTZKHZhAWivW_PU0m_mxqShwleK9&_nc_ohc=3Vr6NGK_GJcAX9UaHgX&_nc_ht=scontent.fpnh7-1.fna&oh=00_AfDQLChuj9nq1JDYEkbP38aUCLIbKr9lC0liAKF_CayDZQ&oe=65A6D49B',
                'https://composted-cam.org/assetfrontview/images/logo.png',
                'https://ncsd.moe.gov.kh/ndc-tracking/media/ministry_logo/03_Ministry%20of%20Environment%20(MOE).png' // Add more logo paths as needed
            ],
        }
    },
}
</script>
