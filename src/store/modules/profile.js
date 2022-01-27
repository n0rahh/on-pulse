import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state() {
    return {
        projects: [
            {
                id: 0,
                title: 'Landing page',
                image: 'https://cdn.pixabay.com/photo/2018/02/15/14/37/leaf-3155438_960_720.jpg'
            },
            {
                id: 1,
                title: 'Bank page',
                image: 'https://cdn.pixabay.com/photo/2018/02/15/14/37/leaf-3155438_960_720.jpg'
            },
            {
                id: 2,
                title: 'eCommerce',
                image: 'https://cdn.pixabay.com/photo/2018/02/15/14/37/leaf-3155438_960_720.jpg'
            },
            {
                id: 3,
                title: 'Browser game',
                image: 'https://cdn.pixabay.com/photo/2018/02/15/14/37/leaf-3155438_960_720.jpg'
            },
            {
                id: 4,
                title: 'Dashboard',
                image: 'https://cdn.pixabay.com/photo/2018/02/15/14/37/leaf-3155438_960_720.jpg'
            }
        ]
    };
  },
  mutations: {
  },
  actions: {
  },
  getters: {
      projectGet() {
        return state => state.projects; 
      }
  }
});
