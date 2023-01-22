import { createRouter, createWebHistory } from 'vue-router';
import MobileDetect from 'mobile-detect';

import w_HomePage from '@/web/pages/HomePage.vue';
import w_CategoryPage from '@/web/pages/CategoryPage.vue';
import w_ProductPage from '@/web/pages/ProductPage.vue'

const m_routes = [ //모바일 라우터
    {
      path: '/',
      name: 'home',
      component: w_HomePage
    }
]


const w_routes = [ //웹 라우터
    {
      path: '/',
      name: 'home',
      component: w_HomePage
    },
    {
      path: '/category',
      name: 'category',
      component: w_CategoryPage
    },
    {
      path: '/product',
      name: 'product',
      component: w_ProductPage
    }
]

const m_router = new createRouter({
    history : createWebHistory(), //process.env.BASE_URL
    routes : m_routes
})

const w_router = new createRouter({
  history : createWebHistory(), //process.env.BASE_URL
  routes : w_routes
})

let router;
const md = new MobileDetect(window.navigator.userAgent);
if(md.mobile()){
  console.log("CONNECTION WITH MOBILE");
  router = m_router;
}
else{
  console.log("CONNECTION WITH WEB");
  router = w_router;
}

export default router;
