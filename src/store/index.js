import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const stateMange = new Vuex.Store({
  state: {
    a: 1,
    b:2
  },
  mutations: {
    login:(state,data) => {
      state.a = data.a;
      state.b = data.b;
      console.log(state.a+state.b);
    }
  }
});

export default stateMange;
