<template>
  <v-app>
    <Header />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./../layouts/Header.vue";
import Footer from "./../layouts/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
a:link, a:visited {
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>