<template>
<NavTop />
<v-container fluid>
    <div class="h-screen">
        <v-row justify="center" align="center" class="contact-us-background">
            <v-col cols="12" md="6" class="bg">
                <h2 class="font-weight-bold display-3">Contact Us</h2>
                <div class="w-auto">We'd love to hear from you. Reach out using the form below or contact us through other means. Feel free to get in touch with us!</div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <!-- Your Contact Form Goes Here -->
                <v-form @submit.prevent="submitForm">
                    <v-text-field v-model="name" label="Name" required></v-text-field>
                    <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                    <v-textarea v-model="message" label="Message" required></v-textarea>
                    <v-btn type="submit" color="green">Submit</v-btn>
                </v-form>
            </v-col>

            <v-col cols="12" md="6" class="">
                <!-- Additional Contact Information Goes Here -->
                <v-card>
                    <h2 class="space">Contact Information</h2>
                    <v-card-text>
                        <h6 class="space"><strong>Email:</strong> info@example.com</h6>
                        <h6 class="space"><strong>Phone:</strong> +1 (555) 123-4567</h6>
                        <h6 class="space"><strong>Address:</strong> 123 Main Street, Cityville, State, Country</h6>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>

</v-container>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
export default {
    components: {
        NavTop
    },

    data() {
        return {
            name: '',
            email: '',
            message: '',
        };
    },
    methods: {
        submitForm() {
            // Add logic to handle form submission
            console.log('Form submitted!', this.name, this.email, this.message);
        },
    },
};
</script>

<style scoped>
/* Add your custom styles here */
.contact-us-background {
    background-color: rgba(0, 128, 0, 0.733);
    height: 250px;
    width: auto;
}
.space {
    padding-top: 30px;
    padding-left: 20px;
}

.bg {
    text-align: center;
    align-items: center;
    color: white;

}
</style>
