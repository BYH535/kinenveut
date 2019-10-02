<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Kinenveut</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/connection" text >Connection</v-btn>
        <v-btn text>Authentification</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./../layouts/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style>
</style>