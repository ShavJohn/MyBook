import axios from 'axios'
export default {
  state: {
    friendSuatus: [],
    friendRequestList: null
  },
  getters: {
    getStatus(state){
      return state.friendSuatus
    },
    myRequest(state){
      return state.friendRequestList
    }
  },
  mutations: {
    friendShip(state, data){
      state.friendSuatus = data
    },
    requests(state, data){
      state.friendRequestList = data
    }
  },
  actions: {
    sendFriend(context, id){
      return new Promise((resolve, reject) => {
        axios.post('/user/sendRequest/' + id).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    statusCheker(context, id){
      return new Promise((resolve, reject) => {
        axios.get('/user/getstatus/' + id).then(res =>  {
          context.commit('friendShip', res.data)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    friendRiquests(context, data){
      return new Promise((resolve, reject) => {
        axios.get('/user/friend-riquests').then((res) => {
          context.commit('requests', res.data)
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    accept(context, id){
      return new Promise((resolve, reject) => {
        axios.put('/user/accept/'+ id).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    cancel(context, id){
      return new Promise((resolve, reject) => {
        axios.put('/user/cancel/' + id).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
}
