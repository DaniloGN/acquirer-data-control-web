<template>
    <v-app class="home">
        <PortalNavbar></PortalNavbar>
        <v-container fluid>
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

<style>
</style>
