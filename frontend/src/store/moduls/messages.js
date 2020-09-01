import axios from 'axios'
export default {
  state: {
    contacts: null,
    messages: null,
  },
  getters: {
    getContact(state){
      return state.contacts
    },
    message(state){
      return state.messages
    },
  },
  mutations: {
    setContact(state, data){
      state.contacts = data
    },
    message(state, data){
      state.messages = data
    },
  },
  actions: {
    getContact(context, data){
      return new Promise((resolve, reject) => {
        axios.get('/user/contacts').then(res => {
          context.commit('setContact', res.data)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getConversation(context, id){
      return new Promise((resolve, reject) => {
        axios.get(`user/conversation/${id}`).then(res => {
          context.commit('message', res.data)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
  }
}
