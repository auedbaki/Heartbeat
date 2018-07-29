<template >

  <v-list two-line>
    <v-subheader >Remote Lists</v-subheader>
    <hb-remote :remote="remote" v-for="remote in list" :key="remote._id"></hb-remote>
  </v-list>

</template>

<script>
import HbRemote from './Remote'
  export default  {
    name: 'remotes-list',
    props: [],
    mounted() {

    },
    data() {
      return {
        list:[
          {_id: 1, alias: 'my alias 1', uri: 'http://localhost:8080'},
          {_id: 2, alias: 'my alias 2', uri: 'http://localhost:8080'},
          {_id: 3, alias: 'my alias 3', uri: 'http://localhost:8080'},
          {_id: 4, alias: 'my alias 4', uri: 'http://localhost:8080'}
        ]
      }
    },
    methods: {

    },
    computed: {

    },
    components: {
      HbRemote
    }
}
</script>

<style scoped >
</style>
