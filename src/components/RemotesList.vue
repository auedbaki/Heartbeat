<template >

  <v-list two-line v-if="allRemotes.length > 0 ? true : false">
    <v-subheader>Remote Lists</v-subheader>
    <transition-group name="list" type="transition">
      <hb-remote :remote="remote" v-for="remote in allRemotes" :key="remote._id" class="list-item"></hb-remote>
    </transition-group>
  </v-list>
  <v-card v-else>
    <v-card-text>Please add remotes to monitor</v-card-text>
  </v-card>

</template>

<script>
import HbRemote from './Remote'
import { mapGetters } from 'vuex'
  export default  {
    name: 'remotes-list',
    props: [],
    mounted() {

    },
    data() {
      return {
        list:[
          
        ]
      }
    },
    methods: {

    },
    computed: {
      ...mapGetters(['allRemotes'])
    },
    components: {
      HbRemote
    }
}
</script>

<style scoped lang="stylus">
  .list-item{
    transition: all 1s;
    display: block;
  }
  .list-leave-to {
    background: red;
    opacity: 0;
    transform: translateY(400px)
  }
  .list-enter {
    background: green;
    opacity: 0;
    transform: translateY(400px)
  }
  .list-leave-active {
    position: absolute;
  }
</style>
