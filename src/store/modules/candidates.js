import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
        portfoliosList: [
            {
                id: 0,
                name: 'Peter',
                surname: 'Parker',
                country: 'Warszawa',
                specialization: 'Frontend',
                aboutInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque ',
                projectsList: [
                    'Partner page',
                ],
                image: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png'
            },
            {
                id: 1,
                name: 'Lorem',
                surname: 'Ipsum',
                country: 'Łódź',
                specialization: 'Backend',
                aboutInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque ',
                projectsList: [
                    'Bank page',
                    'Commerce page',
                    'Project lorem'
                ],
                image: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png'
            },
            {
                id: 2,
                name: 'Harry',
                surname: 'Osborn',
                country: 'Warszawa',
                specialization: 'Fullstack',
                aboutInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque ',
                projectsList: [
                    'Bank page',
                    'eCommerce page',
                ],
                image: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png'
            },
            {
                id: 3,
                name: 'Harry',
                surname: 'Potter',
                country: 'Poznan',
                specialization: 'Backend',
                aboutInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque ',
                projectsList: [
                    'AI chess',
                    'Robo hand',
                ],
                image: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png'
            },
            {
                id: 4,
                name: 'Ronald',
                surname: 'Redhair',
                country: 'Gdańsk',
                specialization: 'UI/UX designer',
                aboutInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque ',
                projectsList: [
                    'Carier page',
                    'HRM integration'
                ],
                image: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png'
            }
        ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
      portfoliosGet() {
           return state => state.portfoliosList; 
      }
  }
});