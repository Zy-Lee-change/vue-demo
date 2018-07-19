import Vue from 'vue';
import VueRouter from 'vue-router';
/**
 * 优化加载速度，懒加载
 * */
let Index = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('./assets/component/index/index'))
  },'Index');
};
let Index_home = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('./assets/component/index/case1/caseBox'))
  },'Index');
};
Vue.use(VueRouter);
const routes = [
  {
    path:'/',
    redirect: '/index',
    component:Index
  },
  {
    path:'*',
    redirect: '/index',
    component:Index
  },
  {
    path:'/index',
    component: Index,
    meta: {
      requestAuth:true
    },
    children: [
      {
        path:'',
        component:Index_home,
        meta:{
          requestAuth:true
        }
      },
      {
        path:'home',
        component:Index_home,
        meta:{
          requestAuth:true
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
