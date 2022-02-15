import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state() {
    return {
        gamesList: [
            {
                id: 0,
                title: "Monster Slayer",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.",
                image: 'https://cdn.pixabay.com/photo/2017/10/25/19/45/arrows-2889040_960_720.jpg',
                author: 'Peter Parker'
            },
            {
                id: 1,
                title: "Memory",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.",
                image: 'https://cdn.pixabay.com/photo/2017/10/25/19/45/arrows-2889040_960_720.jpg',
                author: 'Joe Doe'
            },
            {
                id: 2,
                title: "Chess game",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.",
                image: 'https://cdn.pixabay.com/photo/2017/10/25/19/45/arrows-2889040_960_720.jpg',
                author: 'Melissa Lowest'
            },
            {
                id: 3,
                title: "Amazing proj game turbo",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.",
                image: 'https://cdn.pixabay.com/photo/2017/10/25/19/45/arrows-2889040_960_720.jpg',
                author: 'John Hightower'
            }
        ]
    };
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    gamesGet() {
         return state => state.gamesList; 
    }
}
});
