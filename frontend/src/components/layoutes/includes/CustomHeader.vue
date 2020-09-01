<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <router-link class="text-decoration-none text-white" :to="{name: 'Home'}"><img src="../../../assets/logo.png" class="logo-img">
          {{ $t('mybook') }}
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <logout v-if="IsLoggedin || checkin" class="ml-auto"/>
          <login v-else class="ml-auto"/>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import Login from '../../auth/Login'
  import Logout from '../../auth/Logout'
  export default {
      components: {Login, Logout},
      data() {
        return {
            checkin: null,
        }
      },
      mounted() {
          this.checker()
          this.isLoggedIn
      },
      computed: {
         IsLoggedin(){
              return this.$store.getters.isLoggedIn;
         },
      },
      methods: {
          checker(){
             if(localStorage.getItem('access_token')){
                this.checkin = localStorage.getItem('access_token')
             }
          },
          searchUser(){
            this.$store.dispatch('search', this.search)
          }
      },
  }
</script>
