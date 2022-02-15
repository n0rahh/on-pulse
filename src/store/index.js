import Vue from 'vue';
import Vuex from 'vuex';
import homeModule from './modules/home.js';
import adsModule from './modules/ads.js';
import candidatesModule from './modules/candidates.js';
import breakModule from './modules/break.js';
import profileModule from './modules/profile.js';
import authModule from './modules/auth.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    home: homeModule,
    ads: adsModule,
    candidates: candidatesModule,
    break: breakModule,
    profile: profileModule,
    auth: authModule
  },
  
});
