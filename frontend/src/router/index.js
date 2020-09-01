import Vue from 'vue'
import Router from 'vue-router'
import WelcomPage from '@/components/WelcomPage'
import Home from '../components/profile/Home'
import Profile from '../components/profile/Profile'
import User from '../components/profile/User'
import EditProfile from '../components/profile/EditProfile'
import Messages from '../components/messages/ChatApp'
import Users from '../components/profile/Users'

Vue.use(Router)

const router =  new Router({
  mode: "history",
  routes: [
    {path: '/',name: 'WelcomPage', component: WelcomPage},
    {path: '/home',name: 'Home', component: Home, meta: {auth: true, title: 'MyBook | News Feed'}},
    {path: '/:user_id',name: 'Profile', component: Profile, meta: {auth: true, title: 'MyBook | My profile'}},
    {path: '/edite',name: 'EditProfile', component: EditProfile, meta: {auth: true, title: 'MyBook | My Edit Profile'}},
    {path: '/:user_id',name: 'User', component: User, meta: {auth: true, title: 'MyBook | User'}},
    {path: '/messages',name: 'Messages', component: Messages, meta: {auth: true, title: 'MyBook | Messages'}},
    {path: '/users',name: 'Users', component: Users, meta: {auth: true, title: 'MyBook | Users'}},
  ]
})



router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'MyBook'
  if(to.meta.auth && !localStorage.getItem('access_token')) {
      router.push({name: 'WelcomPage'})
  }else {
      next()
  }
});

export default router
