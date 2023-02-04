import { createRouter, createWebHistory } from 'vue-router';
import m_HomePage from '@/mobile/pages/HomePage.vue';
import m_CategoryPage from '@/mobile/pages/CategoryPage.vue';
import m_ProductPage from '@/mobile/pages/ProductPage.vue';
import m_LoginPage from '@/mobile/pages/LoginPage.vue';
import m_Login2Page from '@/mobile/components/LoginPage/LoginMain2.vue';
import m_RegisterPage from '@/mobile/pages/RegisterPage.vue';
import m_AgreePage from '@/mobile/components/RegisterPage/AgreeRegister.vue';
import m_PolicyPage from '@/mobile/pages/PolicyPage.vue';
import m_CompanyPage from '@/mobile/pages/CompanyPage.vue';
import m_ProfilePage from '@/mobile/pages/ProfilePage.vue';
import m_WishPage from '@/mobile/pages/WishPage.vue';
import m_KakaoLoginRedirect from '@/mobile/pages/KakaoLoginRedirect.vue'
import m_NaverLoginRedirect from '@/mobile/pages/NaverLoginRedirect.vue'
import m_GoogleLoginRedirect from '@/mobile/pages/GoogleLoginRedirect.vue'
import m_BrandPage from '@/mobile/pages/BrandPage.vue';
import m_AdminPage from '@/mobile/pages/AdminPage.vue';

const m_routes = [ //모바일 라우터
    {
      path: '/',
      name: 'home',
      component: m_HomePage
    },
    {
      path: '/admin',
      name: 'admin',
      component: m_AdminPage
    },
    {
      path: '/category',
      name: 'category',
      component: m_CategoryPage
    },
    {
      path: '/product',
      name: 'product',
      component: m_ProductPage
    },
    {
      path: '/login',
      name: 'login',
      component: m_LoginPage
    },
    {
      path: '/login2',
      name: 'login2',
      component: m_Login2Page
    },
    {
      path: '/register',
      name: 'register',
      component: m_RegisterPage
    },
    {
      path: '/register/agree',
      name: 'terms_agree',
      component: m_AgreePage
    },
    {
      path: '/policy',
      name: 'policy',
      component: m_PolicyPage
    },
    {
      path: '/company',
      name: 'company',
      component: m_CompanyPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: m_ProfilePage
    },
    {
      path: '/wish',
      name: 'wish',
      component: m_WishPage
    },
    {
      path: '/kakao',
      name: m_KakaoLoginRedirect,
      component: m_KakaoLoginRedirect
    },
    {
      path: '/naver',
      name: m_NaverLoginRedirect,
      component: m_NaverLoginRedirect
    },
    {
      path: '/google',
      name: m_GoogleLoginRedirect,
      component: m_GoogleLoginRedirect
    },
    {
      path: '/brand',
      name: 'brand',
      component: m_BrandPage
    },
]

const mobile_router = new createRouter({
  history : createWebHistory(),
  routes : m_routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default mobile_router;
