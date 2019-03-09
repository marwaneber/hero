<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-text>
          <router-link to="/">
            <v-btn small flat class="red--text right"> Annuler </v-btn>
          </router-link>
          <v-text-field
            label="Nom de cours"
            placeholder="Tapez quelque mots.."
            outline="true"
          ></v-text-field>
          <v-flex
            xs12
            class="text-xs-center text-sm-center text-md-center text-lg-center"
          >
            <v-text-field
              label="Select Image"
              @click="pickFile"
              v-model="imageName"
              prepend-icon="attach_file"
            ></v-text-field>
            <input
              type="file"
              style="display: none"
              ref="image"
              accept="application/pdf"
              @change="onFilePicked"
            />
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      imageName: ""
    };
  },

  methods: {
    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    }
  }
};
</script>

<style scoped></style>
