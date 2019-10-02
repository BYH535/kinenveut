<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="black" text rounded class="my-2">{{ link }}</v-btn>
      <v-col class="lighten-2 py-4 text-center black--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Accueil", "A propos", "Equipe", "Connection", "Inscritpion", "Contactez Nous"]
  })
};
</script>

<style>
</style>