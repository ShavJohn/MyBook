<template>
  <div>
    <div class="request-text">
        {{ $t('request') }}
    </div>
    <div class="request-body">
       <div class="requests-list" v-for="request in friendRequests" :key="request.id">
        <span class="request-name">{{request.name}}</span>
        <div class="btn">
          <b-button class="btn-accept" @click="accept(request.sender_id)" variant="success">{{ $t('accept') }}</b-button>
          <b-button class="btn-cancel" @click="cancel(request.sender_id)" variant="danger">{{ $t('cancel') }}</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      return this.$store.dispatch('friendRiquests')
      console.log(this.friendRequests)
    },
    computed: {
      friendRequests(){
        return this.$store.getters.myRequest
      }
    },
    methods: {
      accept(id){
          this.$store.dispatch('accept', id).then(() => {
            this.$store.dispatch('friendRiquests')
          })

      },
      cancel(id){
        this.$store.dispatch('cancel', id).then(() => {
            this.$store.dispatch('friendRiquests')
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
