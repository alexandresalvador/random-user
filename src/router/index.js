import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '../views/users/User.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    name: "Usuario",
    component: user,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
