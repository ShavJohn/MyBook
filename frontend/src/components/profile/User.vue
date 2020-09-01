<template>
  <div>
    <div class="main-body" v-for="user in getUser" :key="user.id">
      <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" class="back-img"></b-img>
      <b-img :src="user.avatar" class="profile-img"></b-img>
      <div class="user-name">{{user.name}}</div>
      <div class="buttons">
      <div v-if="user.id == auth.id">
          <b-button @click="goToMessages" variant="outline-primary">{{ $t('messages') }}</b-button>
        </div>
        <div v-else>
          <div v-if="freiendRequest[0]">
            <b-button v-if="freiendRequest[0].friend_status == 'sent'" variant="outline-primary">Sent</b-button>
            <b-button v-else-if="freiendRequest[0].friend_status == 'accept'" @click="goToMessages(user.id)" variant="outline-primary">Massages</b-button>
          </div>
          <div v-else>
            <b-button  variant="outline-primary" @click="addFriend(user.id)">Add Friend</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          thisUser: this.$route.params.user_id,
        }
      },
      mounted() {
          this.$store.dispatch('getUser', this.thisUser);
      },
      computed: {
        getUser(){
          return this.$store.getters.currentUser
        },
        auth(){
          return this.$store.getters.itIsMe
        },
        freiendRequest(){
          return this.$store.getters.getStatus
        }
      },
      methods: {
        addFriend(id){
          this.$store.dispatch('sendFriend', id).then(() => {
              this.$store.dispatch('statusCheker', id)
          })
        },
        goToMessages(id){
          this.$router.push({name: 'Messages'}).then(() => {
            this.$emit('selected', id)
          })
        }
      },
  }
</script>

<style lang="scss" scoped>

</style>
