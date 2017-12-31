<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="480">
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="email" label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="login">LOGIN</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      color="error"
      v-model="showErrorMsg"
      top="top"
    >{{ errorMsg }}</v-snackbar>
  </v-layout>
</template>
<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      showErrorMsg: false,
      errorMsg: '',
      dialog: true,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('dashboard')
        },
        (err) => {
          this.errorMsg = "Oops. " + err.message
          this.showErrorMsg = true
        }
      )
    }
  }
}
</script>