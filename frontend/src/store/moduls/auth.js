import axios from 'axios'
export default {
  state: {
      islogin: null,
      itsMe: []
  },
  getters: {
      isLoggedIn(state){
         return state.islogin
      },
      itIsMe(state){
        return state.itsMe
      }
  },
  mutations: {
    checkIn(state, data) {
      state.islogin = data
    },
    meChecker(state, data){
      state.itsMe = data
    }
  },
  actions: {
    login(context, data){
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', data).then(res => {
          localStorage.setItem('access_token', res.data.access_token);
          axios.defaults.headers.Authorization = `Bearer ${res.data.access_token}`;
          context.dispatch('me');
          context.commit('checkIn', res.data.access_token);
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    logout(context, data){
      return new Promise((resolve, reject) => {
        axios.post('/auth/logout', data).then(res => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user');
          context.commit('checkIn', null);
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    me(context, data){
        return new Promise((resolve, reject) => {
          axios.post('/auth/me', data).then(res => {
            localStorage.setItem('user', JSON.stringify(res.data));
            context.commit('meChecker', res.data)
            resolve(res)
          }).catch(() => {
            reject()
          })
        })
    }
  }
}
