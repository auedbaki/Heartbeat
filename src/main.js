require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
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
  transitions
} from 'vuetify'
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
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
