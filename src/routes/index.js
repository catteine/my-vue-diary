import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/list/ListPage'
import Write from '../components/write/WritePage'
import View from '../components/view/ViewPage'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/list',
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/write',
    name: 'write',
    component: Write,
  },
  {
    path: '/view',
    name: 'view',
    component: View,
    props: true,
  },
];

export default new VueRouter({
	mode:'history',
  routes,
});