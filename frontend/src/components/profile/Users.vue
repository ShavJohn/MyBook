<template>
  <div>
  <div class="container">
    <table class="usersTable">
      <tr class="rows">
        <th>{{ $t('name') }}</th>
        <th>{{ $t('email') }}</th>
        <th>{{ $t('status') }}</th>
        <th>{{ $t('role') }}</th>
      </tr>
      <tr class="rows rows-items" v-for="user in usersList" :key="user.id">
        <td class="name">{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.status}}</td>
        <td>{{ user.role }}</td>
      </tr>
    </table>
  </div>
  </div>
</template>

<script>
  export default {
      computed: {
        usersList(){
          return this.$store.getters.allUsersList
        }
      },
      props: {
        status: {
            type: String,
            default: true ? 'acitve' : 'deactive'
        },
      },
      mounted() {
        this.$store.dispatch('allUsers')
      },
      methods: {
        statusChange(id){

        }
      },

  }
</script>

<style lang="scss" scoped>

</style>
