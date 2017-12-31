<template>
  <v-card>
    <v-toolbar dense>
      <v-icon>people</v-icon>
      <v-toolbar-title>Clients</v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>
<script>

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCLJXV0PoTtTYtv7dJPIjXFV65E0HGjizA',
  authDomain: 'tmpjr-chamba.firebaseapp.com',
  databaseURL: 'https://tmpjr-chamba.firebaseio.com',
  storageBucket: 'tmpjr-chamba.appspot.com'
}

export default {
  data() {
    return {
      foo: 'barx'
    }
  },
  beforeMount() {
    console.log('beforeMount')
    firebase.initializeApp(firebaseConfig)
    let db = firebase.database()

    let clients = db.ref('clients')
    console.log(clients)
  }
}
</script>