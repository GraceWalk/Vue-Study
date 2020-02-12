import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const UserNews = () => import('../components/UserNews')
const UserFlags = () => import('../components/UserFlags')

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/user/:userId', component: User , 
    children: [
      { path: '/', redirect: 'news' },
      { path: 'news', component: UserNews },
      { path: 'flags', component: UserFlags }
    ]
  }
]

export default new Router({
  routes,
  mode: 'history'
})