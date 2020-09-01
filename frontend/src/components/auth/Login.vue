<template>
  <div>
       <div>
        <b-navbar-nav>
          <b-form inline @submit.prevent="login">
            <label class="sr-only" for="inline-form-input-username">Username</label>
            <b-input
              id="inline-form-input-username"
              placeholder="Username"
              v-model="user_credentials.email"
              >
            </b-input>
            <label class="sr-only" for="inline-form-input-name">Password</label>
            <b-input
              type="password"
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="user_credentials.password"
              placeholder="Password"></b-input>
            <b-button variant="primary" type="submite">
              <b-spinner v-if="loader" variant="white"></b-spinner>
              <span v-else>Login</span>
            </b-button>
          </b-form>
        </b-navbar-nav>
        </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
            loader: false,
            user_credentials: {}
        }
      },
      methods: {
         login(){
           if(this.loader) return;
              this.loader = true
              this.$store.dispatch('login', this.user_credentials).then(() => {
                this.$router.push({name: 'Home'})
              }).finally(() => {
                this.loader = false
              })
         }
      },
  }
</script>

<style scoped>

</style>
