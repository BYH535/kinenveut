<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link.nom" color="black"
             text rounded class="my-2" :to="link.path"><span class="mt-2">{{ link.nom }}</span></v-btn>
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
    links: [
      {
        nom : "Accueil",
        path : '/'
      },
      {
        nom : "A propos",
        path : '/apropos'
      },
      {
        nom : "Equipe",
        path : '/equipe'
      },
      {
        nom : "Connection",
        path : '/connection'
      },
      {
        nom : "Inscritpion",
        path : '/inscription'
      },
      {
        nom : "Contactez Nous",
        path : '/contactez-nous'
      }
    ]
  })
};
</script>

<style>
</style>