<template>
  <div>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title class="headline text-uppercase white--text">
        <router-link to="/">Kinenveut</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/connection">
          <span class="mt-5">Connection</span>
        </v-btn>
        <v-btn text to="/inscription">
          <span class="mt-5">Inscription</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>