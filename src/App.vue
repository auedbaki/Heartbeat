<template>
  <v-app dark>
    <v-toolbar dark fixed dense>
      <v-toolbar-title>HeartBeat</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container fluid class="pa-0">
      <v-layout column mt-5>
          <fb-remotes-list></fb-remotes-list>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import FbRemotesList from './components/RemotesList.vue'
  export default {
    data () {
      return {
        
      }
    },
    components: {
      FbRemotesList
    }
  }
</script>
