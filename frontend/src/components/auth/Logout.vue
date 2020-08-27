<template>
  <div>
    <b-navbar-nav>
      <search/>
      <select v-model="locale" @change="$i18n.locale = locale">
        <option value="en" selected>{{ $t('en') }}</option>
        <option value="am">{{ $t('am') }}</option>
      </select>
      <!--<b-nav-item-dropdown text="Lang" right v-model="locale" @change="$i18n.locale = locale">
        <b-dropdown-item value="en" selected>EN</b-dropdown-item>
        <b-dropdown-item value="am">AM</b-dropdown-item>
      </b-nav-item-dropdown>-->
      <b-button v-if="currentUser.role == 'admin'" @click="goToUsers">{{ $t('allUsers') }}</b-button>
      <b-nav-item-dropdown right>
        <template v-slot:button-content>
          <em>{{ $t('mypage') }}</em>
        </template>
        <b-dropdown-item @click="goToProfile(currentUser.id)">{{ $t('profile') }}</b-dropdown-item>
        <b-dropdown-item @click="logout">{{ $t('signout') }}</b-dropdown-item>
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
          locale: 'en'
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
          goToUsers(){
            if(this.$route.name == 'Users' ){
               return;
            }
            else {
              this.$router.push({name: 'Users'}).then(() => {
                this.$store.dispatch('allUsers')
              })
            }
          }
      },
  }
</script>

<style scoped>

</style>
