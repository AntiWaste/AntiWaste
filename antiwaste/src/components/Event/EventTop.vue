<template>
<div>
    <NavTop />
    <div class="h-screen align-center">
        <div class="d-flex justify-space-between align-center p-4 h-screen ">
            <v-img cover height="500" src="../../assets/recycledproduct/pngguru 2.png"></v-img>
            <div class="d-flex flex-column align-center justify-center mb-8 bg-white fill-height">
                <div class="display-6 font-weight-bold">
                    Waste Summit
                    Cambodia 2024
                </div>
                <p class="pa-md-4 mx-lg-auto">
                    Only 2 days left until the Waste Summit 2024!
                    Don't forget to join us at the Waste Summit this Saturday 13th May.
                </p>
                <v-btn>
  get ticket
</v-btn>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavTop from '@/components/NavTop.vue'
export default {
    components: {
        NavTop,
    },
}
</script>
