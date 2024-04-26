<template>
  <v-app class="bg-surface-variant">
    <v-container
      class="d-flex justify-center align-center flex-column bg-surface-variant"
    >
      <v-row class="bg-green-lighten2 pa-15">
        <div class="col-4 col-md-4 col-lg-4">
          <v-banner-text class="text-h5 font-weight-bold">
            About Us
          </v-banner-text>
          <v-banner-text class="text-h7">
            <v-list class="bg-surface-variant">
              <v-list-item v-for="about in aboutUs" :key="about">
                <v-list-item-content>{{ about }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-banner-text>
        </div>
        <div class="col-4 col-md-4 col-lg-4">
          <v-banner-text class="text-h5 font-weight-bold">
            Quick Links
          </v-banner-text>
          <v-banner-text class="text-h7">
            <v-list class="bg-surface-variant">
              <v-list-item v-for="link in links" :key="link">
                <v-list-item-content>{{ link }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-banner-text>
        </div>
        <div class="col-4 col-md-4 col-lg-4">
          <v-banner-text class="text-h5 font-weight-bold">
            Help And Support
          </v-banner-text>
          <v-banner-text class="text-h7">
            <v-list class="bg-surface-variant">
              <v-list-item v-for="help in helps" :key="help">
                <v-list-item-content class="">{{ help }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-banner-text>
        </div>

        <div class="col-4 col-md-4 col-lg-4">
          <v-banner-text class="text-h5 font-weight-bold">
            Stay Connected - Stay Green
          </v-banner-text>
          <v-banner-text class="text-h7">
            <v-text-field
              class="bg-surface-variant"
              placeholder="Enter your email"
              outlined
              dense
            ></v-text-field>
            <v-btn class="bg-green">Subscribe</v-btn>
          </v-banner-text>
        </div>

        <div class="col-4 col-md-4 col-lg-4">
          <v-banner-text class="text-h5 font-weight-bold">
            Follow Us
          </v-banner-text>
          <v-banner-text class="text-h7">
            <v-row class="d-flex justify-start">
              <v-icon class="ma-5" v-for="icon in icons" :key="icon">{{
                icon
              }}</v-icon>
            </v-row>
          </v-banner-text>
        </div>
        <v-footer name="footer" class="bg-surface-variant">
          <v-card-text class="text-start bg-surface-variant">
            @ 2023 Ant-Waste Copyright. All Rights Reserved.
          </v-card-text>
        </v-footer>
        <div class="col-4 col-md-4 col-lg-4">
          <v-banner-text class="text-h3 font-weight-bold">
            Anti-Waste
          </v-banner-text>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],

    links: ['Home', 'Waste', 'Recycle',' Event', 'Contact Us'],
    helps: ['FQA', 'Terms and Service', 'Privacy Notice', 'Cookie Policy'],
    aboutUs: [
      'Who We Are',
      'Meet the Staff',
      'Work With Us',
      'Who Uses Us + Our Partners',
    ],
  }),
};
</script>
<style scoped>
.custom-app {
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color: black;
}
</style>
