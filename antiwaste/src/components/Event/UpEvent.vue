<template>
<div class="d-flex flex-column">
    <div>
        <div class="ma-10 display-6 font-weight-bold">
            UpComing Events
        </div>
        <div>
            <v-row no-gutters>
                <v-col v-for="n in 3" :key="n" cols="12" sm="4">
                    <v-sheet class=" pa-10">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card max-width="344" v-bind="props">
                                <v-img src="https://socialcompass.jp/wp-content/uploads/2023/06/01-1.jpeg"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-green">
                                        Waste Summit Cambodia
                                    </h2>
                                    <p class="text-grey">3 Week ago</p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </v-card-text>

                                <v-card-title>
                                    <v-rating :model-value="4" dense color="pink" background-color="pink" hover class="d-flex justify-center"></v-rating>
                                </v-card-title>

                                <v-overlay :model-value="isHovering" contained scrim="#036358" class="align-center justify-center">
                                    <v-btn class="text-red" variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 3" :key="n" cols="12" sm="4">
                    <v-sheet class=" pa-10 ">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card max-width="344" v-bind="props">
                                <v-img src="https://socialcompass.jp/wp-content/uploads/2023/06/01-1.jpeg"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-green">
                                        Waste Summit Cambodia
                                    </h2>
                                    <p class="text-grey">3 Week ago</p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </v-card-text>

                                <v-card-title>
                                    <v-rating :model-value="4" dense color="pink" background-color="pink" hover class="d-flex justify-center"></v-rating>
                                </v-card-title>

                                <v-overlay :model-value="isHovering" contained scrim="#036358" class="align-center justify-center">
                                    <v-btn class="text-red" variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </v-sheet>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-pagination class="text-green" v-model="page" :length="4" rounded="circle"></v-pagination>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
        }
    },
}
</script>
