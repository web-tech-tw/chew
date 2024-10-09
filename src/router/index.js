import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout/Index.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'writer',
        component: () => import('../views/WriterView.vue'),
      },
      {
        path: 'result',
        component: () => import('../views/ResultView.vue'),
        props: true,
      },
    ]
  },
  {
    path: '/coder',
    component: () => import('../views/CoderView.vue'),
  },
  {
    path: '/r',
    component: () => import('../layouts/DefaultLayout/Index.vue'),
    children: [
      {
        path: ':code',
        component: () => import('../views/ReaderView.vue'),
        props: true,
      },
    ]
  },
];

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
  routes,
});

export default router;
