import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Wedding',
    component: () => import(/* webpackChunkName: "wedding" */ '../views/Wedding.vue'),
  },
  {
    path: '/:lang',
    name: 'Wedding',
    component: () => import(/* webpackChunkName: "wedding" */ '../views/Wedding.vue'),
  },
  {
    path: '/wedding',
    name: 'Wedding',
    // route level code-splitting
    // this generates a separate chunk (wedding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wedding" */ '../views/Wedding.vue'),
  },
  {
    path: '/wedding/:lang',
    name: 'Wedding',
    // route level code-splitting
    // this generates a separate chunk (wedding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wedding" */ '../views/Wedding.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
