import Vue from 'vue';
import Vuex from 'vuex';
import homeModule from './modules/home.js';
import adsModule from './modules/ads.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    home: homeModule,
    ads: adsModule
  }
});
