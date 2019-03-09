<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <router-link to="/partager">
          <v-card-title>
            Partager vos cours!
            <v-spacer></v-spacer>
            <v-icon> cloud_upload </v-icon>
          </v-card-title>
        </router-link>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
