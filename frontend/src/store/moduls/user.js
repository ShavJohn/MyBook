import axios from 'axios'
export default {
  state: {
      users: null,
      user: null
  },
  getters: {
      usersList(state){
        return state.users
      },
      currentUser(state){
        return state.user
      }

  },
  mutations: {
    allUsers(state, data){
      state.users = data;
    },
    userinfo(state, data){
      state.user = data;
    }
  },
  actions: {
      register(context, data){
        return new Promise((resolve, reject) => {
          axios.post('/user/register', data).then(res => {
            resolve(res)
          }).catch(() => {
            reject()
          })
        })
      },
      search(context, data){
        return new Promise((resolve, reject) => {
          axios.get('/user/search?q='+ data).then(res => {
            context.commit('allUsers', res.data);
            resolve(res)
          }).catch(err => {
             reject(err)
          })
        })
      },
      getUser(context, id){
        return new Promise((resolve, reject) => {
          axios.get(`/user/user/${id}`).then(res => {
            context.commit('userinfo', res.data);
            resolve(res)
          }).catch(err => {
             reject(err)
          })
        })
      }
  }
}
