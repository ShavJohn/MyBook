import axios from 'axios'
export default {
  state: {
      users: null,
      user: null,
      allUsersList: [],
  },
  getters: {
      usersList(state){
        return state.users
      },
      currentUser(state){
        return state.user
      },
      allUsersList(state){
        return state.allUsersList
      }
  },
  mutations: {
    allUsers(state, data){
      state.users = data;
    },
    userinfo(state, data){
      state.user = data;
    },
    allUsersList(state, data){
      state.allUsersList = data;
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
      },
      allUsers(context, id){
        return new Promise((resolve, reject) => {
          axios.get('/user/allusers').then(res => {
            context.commit('allUsersList', res.data);
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        })
      },
      changeStatus(context, data){
        return new Promise((resolve, reject) => {
          axios.put('/user/statusChange', data).then(res => {
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        })
      }
  }
}
