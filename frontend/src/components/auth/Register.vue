<template>
    <b-container>
        <b-row>
            <b-col cols="3" class="regiter-position" ref="register">
                <b-alert v-if="registerd" show variant="success">Registerd Successfully</b-alert>
                <div v-else>
                  <h2 class="text-center py-3">Register</h2>
                  <form action="" @submit.prevent="registerUser">
                      <b-form-group>
                          <b-form-input
                              v-model="user_credentials.name"
                              type="text"
                              required
                              placeholder="Username"
                          ></b-form-input>
                      </b-form-group>
                      <b-form-group>
                          <b-form-input
                              v-model="user_credentials.email"
                              type="email"
                              required
                              placeholder="E-mail"
                          ></b-form-input>
                      </b-form-group>
                      <b-form-group label="Choos your Role">
                        <b-form-radio v-model="user_credentials.role" name="some-radios" value="admin">I'm admin</b-form-radio>
                        <b-form-radio v-model="user_credentials.role" name="some-radios" value="user">I'm User</b-form-radio>
                      </b-form-group>
                      <b-form-group>
                          <b-form-input
                              v-model="user_credentials.password"
                              type="password"
                              required
                              placeholder="password"
                          ></b-form-input>
                      </b-form-group>
                      <b-form-group>
                          <b-form-input
                              v-model="user_credentials.password_confirmation"
                              type="password"
                              required
                              placeholder="confirm"
                          ></b-form-input>
                      </b-form-group>
                      <button class="btn btn-primary btn-block">
                        <b-spinner v-if="loader" variant="white"></b-spinner>
                        <span v-else>Register</span>
                      </button>
                    </form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                loader: false,
                user_credentials: {},
                registerd: false
            }
        },
        methods: {
            registerUser() {
              if(this.loader) return;
              this.loader = true
                this.$store.dispatch('register', this.user_credentials).then((res) => {
                console.log(res.data.message)
              }).finally(() => {
                this.loader = false
                this.registerd = true
                this.$refs.register.display = 'none';
              })
            }
        }
    }
</script>

<style scoped>

</style>
