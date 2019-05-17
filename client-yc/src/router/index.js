import Vue from 'vue';
import VueRouter from 'vue-router'
import AskView from '../views/AskView';
import NewsView from '../views/NewsView';
import JobsView from '../views/JobsView';
import Userview from '../views/Userview';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/asks',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: Userview
    }
  ]
});

export default router;
