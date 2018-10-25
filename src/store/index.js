import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sharedData: [1, 2, 3, 4]
    },
    mutations: {
        add : (state, payload) => {
            state.sharedData.push(payload);
        }
    }
});

export default store;
