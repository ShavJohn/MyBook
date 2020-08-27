<template>
  <div>
    <div class="main-body">
      <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" class="back-img"></b-img>
      <b-img :src="currentUser.avatar" class="profile-img"></b-img>
      <div class="user-name">{{ currentUser.name }}</div>
      <div class="buttons">
        <b-button @click="goToMEdites" variant="outline-primary">{{ $t('editeProfile') }}</b-button>
        <b-button @click="goToMessages" variant="outline-primary">{{ $t('messages') }}</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {

        }
      },
      mounted() {

      },
      computed: {
        currentUser(){
          return this.$store.getters.itIsMe
        }
      },
      methods: {
        goToMEdites(){
          this.$router.push({name: 'EditProfile'})
        },
        goToMessages(){
          this.$router.push({name: 'Messages'})
        }
      },
  }
</script>

<style scoped>

</style>
