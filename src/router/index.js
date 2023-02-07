import { createRouter, createWebHistory } from 'vue-router';
import MobileDetect from 'mobile-detect';
import mobile_router from './mobile';

import w_HomePage from '@/web/pages/HomePage.vue';
import w_CategoryPage from '@/web/pages/CategoryPage.vue';
import w_ProductPage from '@/web/pages/ProductPage.vue';
import w_LoginPage from '@/web/pages/LoginPage.vue';
import w_Login2Page from '@/web/components/LoginPage/LoginMain2.vue';
import w_RegisterPage from '@/web/pages/RegisterPage.vue';
import m_AgreePage from '@/web/components/RegisterPage/AgreeRegister.vue';
import w_PolicyPage from '@/web/pages/PolicyPage.vue';
import w_CompanyPage from '@/web/pages/CompanyPage.vue';
import w_ProfilePage from '@/web/pages/ProfilePage.vue';
import w_WishPage from '@/web/pages/WishPage.vue';
import w_KakaoLoginRedirect from '@/web/pages/KakaoLoginRedirect.vue'
import w_NaverLoginRedirect from '@/web/pages/NaverLoginRedirect.vue'
import w_GoogleLoginRedirect from '@/web/pages/GoogleLoginRedirect.vue'
import w_BrandPage from '@/web/pages/BrandPage.vue';
import w_AdminPage from '@/web/pages/AdminPage.vue';
import w_SearchPage from '@/web/pages/SearchPage.vue';


const m_router = mobile_router;

const w_routes = [ //웹 라우터
    {
      path: '/',
      name: 'home',
      component: w_HomePage
    },
    {
      path: '/admin',
      name: 'admin',
      component: w_AdminPage
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
      path: '/register/agree',
      name: 'terms_agree',
      component: m_AgreePage
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
      path: '/wish',
      name: 'wish',
      component: w_WishPage
    },
    {
      path: '/kakao',
      name: w_KakaoLoginRedirect,
      component: w_KakaoLoginRedirect
    },
    {
      path: '/naver',
      name: w_NaverLoginRedirect,
      component: w_NaverLoginRedirect
    },
    {
      path: '/google',
      name: w_GoogleLoginRedirect,
      component: w_GoogleLoginRedirect
    },
    {
      path: '/brand',
      name: 'brand',
      component: w_BrandPage
    },
    {
      path: '/search',
      name: 'search',
      component: w_SearchPage
    },
]

const w_router = new createRouter({
  history : createWebHistory(),
  routes : w_routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

let router;
//let router = w_router;

const md = new MobileDetect(window.navigator.userAgent);
if(md.mobile()){
  router = m_router;
}
else{
  router = w_router;
}

export default router;
