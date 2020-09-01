<template>
  <div>
    <div class="friends-list-header">{{ $t('friends') }}</div>
    <div v-if="friends == ''">You have no friends yet</div>
    <div v-else class="friends-list-body" v-for="friend in friends" :key="friend.id">
      <div>{{ friend.name }}</div>
      <div>{{ friend.email }}</div>
      <b-button @click="goToMessages(friend.id)">Message</b-button>
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
    methods: {
      goToMessages(id){
        this.$router.push({name: 'Messages'})
      }
    },
  }
</script>
