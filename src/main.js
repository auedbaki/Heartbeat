require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VGrid,
  VBtn,
  VIcon,
  VMenu,
  VToolbar,
  VSubheader,
  VSwitch,
  VCard,
  VTextField,
  VProgressLinear,
  VDivider,
  transitions
} from 'vuetify'
import { routes } from './routes'
import { storeDef } from './store'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VGrid,
    VMenu,
    VSubheader,
    VBtn,
    VSwitch,
    VIcon,
    VToolbar,
    VCard,
    VDivider,
    VTextField,
    VProgressLinear,
    transitions
  },
  theme: {
    primary: '#43A047',
    secondary: '#424242',
    accent: '#EF5350',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes,
  mode:'history'
})

const store = new Vuex.Store(storeDef)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  
})
