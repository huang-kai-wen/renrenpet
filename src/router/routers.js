
export default [
  {
    path: '/homeComputer',
    name: 'computer',
    component: () => import('../views/personalComputer/index.vue')
    // children: [{
    //   path: '/index',
    //   name: '首页',
    //   component: () => import('../views/index.vue')
    // }, {
    //   path: '/page2',
    //   name: 'page2',
    //   component: () => import('../views/page2.vue')
    // }, {
    //   path: '/page3',
    //   name: 'page3',
    //   component: () => import('../views/page3.vue')
    // }, {
    //   path: '/page4',
    //   name: 'page4',
    //   component: () => import('../views/page4.vue')
    // }]
  },
  {
    path: '/homeMobile',
    name: 'mobile',
    component: () => import('../views/mobile/index.vue')
    // children: [{
    //   path: '/index',
    //   name: '首页',
    //   component: () => import('../views/index.vue')
    // }, {
    //   path: '/page2',
    //   name: 'page2',
    //   component: () => import('../views/page2.vue')
    // }, {
    //   path: '/page3',
    //   name: 'page3',
    //   component: () => import('../views/page3.vue')
    // }, {
    //   path: '/page4',
    //   name: 'page4',
    //   component: () => import('../views/page4.vue')
    // }]
  }
]
