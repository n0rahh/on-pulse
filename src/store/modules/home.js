import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
        homeList: [
            {id: 0, title: ''}
        ]
    };
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
