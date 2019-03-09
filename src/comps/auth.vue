<template>
  <v-layout row>
    <v-flex xs12>
      <v-text-field
        label="Email"
        placeholder="Votre email ici"
        outline="true"
        v-model="user.email"
      ></v-text-field>
      <v-text-field
        label="Password"
        placeholder="Votre mot de pass"
        outline="true"
        type="password"
        v-model="user.password"
      ></v-text-field>
      <v-btn class="blue--text" @click="signin" flat> Connecter moi </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "@/fb";

export default {
  data() {
    return {
      signed: false,
      user: {}
    };
  },

  methods: {
    signin: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode + " / " + errorMessage);
        });
      console.log(firebase.auth().currentUser);
      this.$router.push({ path: "/" });
    }
  },
  watch: {
    signed: function() {
      this.signed = firebase.auth().currentUser !== null;
    }
  }
};
</script>

<style scoped></style>
