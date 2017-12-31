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
                <v-text-field v-model="record.username" label="Username" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="record.password" type="password" label="Password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">LOGIN</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
      record: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    dialog() {
      return !this.isLoggedIn
    }
  }
}
</script>