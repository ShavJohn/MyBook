import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.API_URL;

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;

Vue.use(VueAxios, axios);
