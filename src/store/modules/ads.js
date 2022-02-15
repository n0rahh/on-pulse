import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeAds =  new Vuex.Store({
  namespaced: true,
  state: {
        adsList: [
            {
                id: 0,
                title: 'Junior frontend poszukiwany', 
                country: 'Warszawa', stawka: '25 zł/h brutto', 
                shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque',
                longDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque ',
                image: 'https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png'
            },
            {
                id: 1,
                title: 'Senior Fullstack do firmy Tutore', 
                country: 'Łódź', stawka: '110 zł/h brutto', 
                shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque',
                longDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque ',
                image: 'https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png'
            },
            {
                id: 2,
                title: 'Administrator sieciowy', 
                country: 'Tarnów', stawka: '27 zł/h brutto', 
                shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque',
                longDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto neque? A nobis temporibus est, architecto eius, optio porro cumque ',
                image: 'https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png'
            }
        ],
        salary: []
  },
  mutations: {
      salaryList(state) {
        const arr = [];
        for(let i=12; i<=50; i++) {
            arr.push(i);
        }  
        state.salary.push(arr); 
      },
      addToList(state, payload) {
        state.adsList.push(payload)
      }
  },
  actions: {
    salaryList(context) {
        context.commit('salaryList');
    },
    addItemToAdList(context, payload) {
        const arr = {
            id: payload.id,
            title: payload.title,
            country: payload.country,
            stawka: payload.stawka,
            longDesc: payload.longDesc,
            image: payload.image
        };
        context.commit('addToList', arr);
    }
  },
  getters: {
      adsGet() {
           return state => state.adsList; 
      },
      salaryList() {
            return state => state.salary; 
      }
  }
});

export default storeAds;
