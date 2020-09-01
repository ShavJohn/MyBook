<template>
  <div class="home-body">
    <requests class="request"/>
    <friendList class="friend-list"/>
  </div>
</template>

<script>
  import FriendList from './component/FriendList';
  import Requests from './component/FriendRequests'
  export default {
      components: {
         FriendList,
         Requests
      },
      mounted() {
        this.$store.dispatch('getFriendList')
      },
  }
</script>

<style scoped>

</style>
