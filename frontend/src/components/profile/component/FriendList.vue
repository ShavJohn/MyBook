<template>
  <div>
    <div class="friends-list-header">{{ $t('friends') }}</div>
    <div class="friends-list-body" v-for="friend in friends" :key="friend.id">
      <div>{{ friend.name }}</div>
      <div>{{ friend.email }}</div>
      <b-button>Message</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      friends(){
        return this.$store.getters.friendsList
      }
    },
  }
</script>
