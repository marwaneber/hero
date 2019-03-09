<template>
  <v-app>
    <v-toolbar row>
      <v-flex xs2 class="offset-xs5">
        <router-link to="/"> Home </router-link></v-flex
      >
    </v-toolbar>
    <v-layout row class="ma-4">
      <v-flex xs4 v-if="signed">
        <v-list>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon class="teal">local_pizza</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>
                {{ titleCase(user_temp.nom) }}
                {{ user_temp.prenom.toUpperCase() }}</v-list-tile-title
              >
              <v-list-tile-sub-title>
                <v-chip class="orange caption pa-0 mychip" small>
                  {{ user_temp.filiere }}
                </v-chip>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs12><router-view></router-view></v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      signed: false,
      user_temp: {
        abr_filier: "DSI",
        banned: 0,
        centre: "Ly. My. Ismail",
        email: "gero@hero.com",
        filiere: "Développement des Systèmes d'Information",
        nom: "marwane",
        gendre: "M",
        prenom: "beriich",
        prof: false,
        ville: "Meknès"
      }
    };
  },
  methods: {
    titleCase: function(str) {
      str = str.toLowerCase().split(" ");
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(" ");
    }
  }
};
</script>

<style scoped>
.mychip {
  font-size: 10px !important;
  padding: 3px !important;
}
.mychip span {
  margin: 0;
}
</style>
