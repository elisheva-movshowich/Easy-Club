import VueRouter from 'vue-router'

const routes = [
  { path: '/checkbox', component: require('./views/Checkbox.vue').default },
]

export default new VueRouter({

  routes: routes,
  linkActiveClass: 'active'

})