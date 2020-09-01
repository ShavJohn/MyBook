import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import auth from './moduls/auth';
import user from './moduls/user';
import friend from './moduls/friend'
import messages from './moduls/messages'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {

    },
    modules: {
        auth: auth,
        user: user,
        friend: friend,
        messages: messages,
    }
})
