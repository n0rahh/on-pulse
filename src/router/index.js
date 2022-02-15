import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Ad from '../pages/Ad.vue';
import Candidates from '../pages/Candidates.vue';
import BreakZone from '../pages/BreakZone.vue';
import About from '../pages/About.vue';
import Login from '../pages/Login.vue';
import Profile from '../pages/TheProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ads',
    name: 'Ad',
    component: Ad
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: Candidates
  },
  {
    path: '/games',
    name: 'BreakZone',
    component: BreakZone
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
