import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/list/ListPage'
import Write from '../components/write/WritePage'
import View from '../components/view/ViewPage'
import Modify from '../components/modify/ModifyPage'

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
  {
    path: '/modify',
    name: 'modify',
    component: Modify,
    props: true,
  },
];

export default new VueRouter({
	mode:'history',
  routes,
});