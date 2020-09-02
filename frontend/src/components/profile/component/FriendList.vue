<template>
  <div>
    <div class="friends-list-header">{{ $t('friends') }}</div>
    <div class="fl-worning" v-if="friends == ''">{{ $t('fl-worning') }}</div>
    <div v-else class="friends-list-body" v-for="friend in friends" :key="friend.id">
      <div class="name">{{ friend.name }}</div>
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
