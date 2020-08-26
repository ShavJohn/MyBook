<template>
  <div class="home-body">
    <requests class="request"/>
    <post class="post"/>
  </div>
</template>

<script>
  import Post from './component/Post';
  import Requests from './component/FriendRequests'
  export default {
      components: {
         Post,
         Requests
      }
  }
</script>

<style scoped>

</style>
