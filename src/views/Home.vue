<template>
    <v-app class="home">
        <PortalNavbar></PortalNavbar>
        <v-container id="main-container" fluid>
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
// @ is an alias to /src

import PortalNavbar from "../components/PortalNavbar";

export default {
  name: 'home',
  components: {
      PortalNavbar,
  },
  data(){
      return{
      }
  }
}
</script>

<style lang="sass">
    #main-container
        background: #f0f0f0
</style>
