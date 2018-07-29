<template>
  <v-app dark>
    <v-toolbar dark fixed dense>
      <v-toolbar-title>HeartBeat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon flat color="blue">
        <v-icon>minimize</v-icon>
      </v-btn>
      <v-btn icon flat color="accent">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container fluid class="pa-0">
      <v-layout column mt-5 mb-4>
          <router-view></router-view>
      </v-layout>
    </v-container>
    <v-footer class="pl-1 pr-3" :fixed="true">
      <v-btn icon>
        <v-icon>settings</v-icon>  
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn fab top right absolute class="accent" :to="{name:'Remote'}"><v-icon>add</v-icon></v-btn>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>
