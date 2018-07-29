<template>
  <div>
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
    <form @keyup.enter="save">
      <v-card class="pa-2 elevation-0">
        <v-card-title>Remote</v-card-title>
        <v-card-text>
          <v-text-field prepend-icon="visibility" label="Alias" suffix=" " autofocus :disabled="loading" v-model="remote.alias"></v-text-field>
          <v-text-field prepend-icon="cloud" prefix="http://" suffix=" " :disabled="loading" v-model="remote.uri"></v-text-field>
          <v-text-field prepend-icon="timer" label="Interval" suffix="s" autofocus :disabled="loading" v-model="remote.interval"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="cancel" :disabled="loading">Cancel</v-btn>
          <v-btn class="info" @click="save" :disabled="loading">Save</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </div>
</template>

<script>
  export default  {
    name: 'remote-form',
    props: [],
    mounted() {

    },
    created() {
      this.loading = false;
    },
    data() {
      return {
        loading : true,
        remote:{
          alias:'',
          uri:'',
          interval:10
        }
      }
    },
    methods: {
      cancel() {
        this.$router.push({name:'Home'})
      },
      save() {
        this.loading=true
        this.$store.commit('saveRemote', this.remote)
        this.$router.push({name:'Home'})
      }
    },
    computed: {

    }
}
</script>

<style scoped>
</style>
