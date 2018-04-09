import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'
import {store} from './store/stores'
import PouchDB from 'pouchdb-browser'
import vueCalendar from 'vue2-simple-calendar'

PouchDB.plugin(require('pouchdb-find'))
PouchDB.plugin(require('pouchdb-live-find'))

Vue.use(require('vue-pouch'), {
  pouch: PouchDB, // optional if `PouchDB` is available on the global object
  defaultDB: 'AdvoBase' // the database to use if none is specified in the pouch setting of the vue component
})
Vue.use(vueCalendar)

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#a56e19',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store: store,
  template: '<App/>'
}).$mount('#app')
