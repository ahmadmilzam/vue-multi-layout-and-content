import Index from '@/pages/Index.vue';
const About = () => import(/* webpackChunkName: "about-page" */ '@/pages/About.vue');

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/about',
    component: About
  },
];

export default routes;
