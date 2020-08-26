<template>
  <div>
    <b-navbar-nav>
      <search/>
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">AM</b-dropdown-item>
        <b-dropdown-item href="#">EN</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown right>
        <template v-slot:button-content>
          <em>My Page</em>
        </template>
        <b-dropdown-item @click="goToProfile(currentUser.id)">Profile</b-dropdown-item>
        <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
  import Search from '../profile/component/Search';
  export default {
      components: {Search},
      data() {
        return {

        }
      },
      mounted() {
        this.$store.dispatch('me')
      },
      computed: {
        currentUser(){
            return this.$store.getters.itIsMe
        }
      },
      methods: {
          logout(){
              this.$store.dispatch('logout').then(() => {
              this.$router.go({name: 'WelcomPage'})
            })
          },
          goToProfile(id){
            if(this.$route.name == 'Profile' ){
               return;
            }
            else {
              this.$router.push({name: 'Profile', params: {user_id: id}})
            }

          },
      },
  }
</script>

<style scoped>

</style>
