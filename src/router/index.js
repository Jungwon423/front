import { createRouter, createWebHistory } from 'vue-router';
import MobileDetect from 'mobile-detect';

import w_HomePage from '@/web/pages/HomePage.vue';
import w_CategoryPage from '@/web/pages/CategoryPage.vue';
import w_ProductPage from '@/web/pages/ProductPage.vue';
import w_LoginPage from '@/web/pages/LoginPage.vue';
import w_Login2Page from '@/web/components/LoginPage/LoginMain2.vue';
import w_RegisterPage from '@/web/pages/RegisterPage.vue';
import w_PolicyPage from '@/web/pages/PolicyPage.vue';
import w_CompanyPage from '@/web/pages/CompanyPage.vue';
import w_ProfilePage from '@/web/pages/ProfilePage.vue';
import w_LikePage from '@/web/pages/LikePage.vue';

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
    },
    {
      path: '/login',
      name: 'login',
      component: w_LoginPage
    },
    {
      path: '/login2',
      name: 'login2',
      component: w_Login2Page
    },
    {
      path: '/register',
      name: 'register',
      component: w_RegisterPage
    },
    {
      path: '/policy',
      name: 'policy',
      component: w_PolicyPage
    },
    {
      path: '/company',
      name: 'company',
      component: w_CompanyPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: w_ProfilePage
    },
    {
      path: '/like',
      name: 'like',
      component: w_LikePage
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
