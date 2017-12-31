import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import firebase from 'firebase'
import router from './router/index.js'

Vue.use(Vuetify)

let app
const config = {
  apiKey: "AIzaSyCLJXV0PoTtTYtv7dJPIjXFV65E0HGjizA",
  authDomain: "tmpjr-chamba.firebaseapp.com",
  databaseURL: "https://tmpjr-chamba.firebaseio.com",
  projectId: "tmpjr-chamba",
  storageBucket: "tmpjr-chamba.appspot.com",
  messagingSenderId: "863333747819"
};
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})



