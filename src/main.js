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
  transitions
} from 'vuetify'
import { routes } from './routes'
import App from './App.vue'

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

const router = new VueRouter({
  routes,
  mode:'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
  
})
