<template >
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <v-icon class="white--text">report_problem</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>{{remote.alias}}</v-list-tile-title>
      <v-list-tile-sub-title>{{remote.uri}}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-layout>
        <v-switch v-model="remote.monitoring" color="blue"></v-switch>
        <v-menu transition="slide-y-transition" bottom>
          <v-btn icon slot="activator" class="ml-2" >
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>Edit</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Remove</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-layout>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script >
  export default  {
    name: 'remote',
    props: {
      remote: {
        type:Object,
        default() {
          return {
            alias: '',
            uri: '',
            status: '-',
            _id: '',
            interval: 0,
            monitoring: true
          }
        }
      }
    },
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped >
</style>
