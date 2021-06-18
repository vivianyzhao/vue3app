import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('./components/HelloWorld') },
    { path: '/about', component: () => import('./components/HelloWorld') }
  ]
})
