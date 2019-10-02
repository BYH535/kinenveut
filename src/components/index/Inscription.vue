<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Inscription</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Nom" name="nom" type="text"></v-text-field>
              <v-text-field label="Prenom" name="prenom" type="text"></v-text-field>
              <v-text-field label="Age" name="age" type="text"></v-text-field>
              <v-text-field label="Telephone" name="telephone" type="text"></v-text-field>
              <v-text-field label="Sex" name="sex" type="text"></v-text-field>
              <v-text-field label="Login" name="login" type="text"></v-text-field>
              <v-text-field label="Password" name="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary">S'inscrire</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>