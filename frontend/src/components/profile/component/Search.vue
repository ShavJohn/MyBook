<template>
  <div>
    <b-nav-form >
      <b-form-input type="search" v-model="search" @keydown="liveSearch()" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button @click.prevent="searchUser()" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      <div class="search-show" v-if="showSearch">
        <div v-for="user in UsersList" :key="user.id" class="user-info" @click="goToSearch(user.id)">
            <img :src="user.avatar" alt="" class="avatar">
            <span class="name">{{user.name}}</span>
        </div>
      </div>
    </b-nav-form>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          search: '',
          showSearch: false,
        }
      },
      computed: {
        UsersList(){
            return this.$store.getters.usersList
        },
      },
      methods: {
        searchUser(){
            this.$store.dispatch('search', this.search).then(res => {
                this.showSearch = true
            }).finally(() => {
               if(this.search == ''){
                this.showSearch = false
               }
            })
          },
          liveSearch(){
            this.$store.dispatch('search', this.search).then(res => {
                this.showSearch = true
            }).finally(() => {
              if(this.search == ''){
                this.showSearch = false
              }
            })
          },
          goToSearch(id){
            if(this.$route.params.user_id == id){
                this.showSearch = false;
                this.search = '';
            }
            else {
              this.$router.push({name: 'User', params: {user_id: id}
              }).then(() => {
                this.$store.dispatch('getUser', id)
              }).then(() => {
                this.$store.dispatch('statusCheker', id)
              }).finally(() => {
                this.showSearch = false;
                this.search = '';
              })
            }
          },
          closeSearch(){
            this.showSearch = false;
            this.search = '';
          }
      },

  }
</script>

<style lang="scss" scoped>

</style>
