// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'
import { store }  from './store/store'

Vue.use(VueFire);


//Vue.http.options.root = 'https://programming-wars.firebaseio.com';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyABctVOAOi6xpr_5cF6Rp93MjsO1Uj-jJc",
      authDomain: "programming-wars.firebaseapp.com",
      databaseURL: "https://programming-wars.firebaseio.com",
      projectId: "programming-wars",
      storageBucket: "programming-wars.appspot.com",
      messagingSenderId: "543791998135"
    });
  }
})
