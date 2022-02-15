import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store({
  namespaced: true,
  state() {
    return {
        userId: null,
        token: null,
        tokenExpiration: null
    };
  },
  mutations: {
      setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.tokenExpiration = payload.tokenExpiration;
      }
  },
  actions: {
      async signup(context, payload) {
          const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCGgMO9XWlUFDmG-1uxfQGNakbuywnE2WI', {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
              }),
          });
          const responseData = await response.json();

          if(!response.ok) {
              const error = new Error(responseData.message || 'Failed authenticate.');
              throw error;
          }

          console.log(responseData);
          context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
          });
      }

  },
  getters: {
      userId() {
          return state => state.userId;
      }
  }
});

export default store;
