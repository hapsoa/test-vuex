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
    },
    actions: {
        asdf : (store, payload) => {
            store.state.sharedData.pop();
            // 비동기 함수를 쓰는 곳
        }
    }
});

export default store;
