import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 핵심 Data
  },
  getters: {
    // Data(가공한) getter
    /* isLoggedIn(state) {
      return token ? true : false
    } */
  },
  mutations: {
    // state를 변경하는 함수 (동기)
  },
  actions: {
    //기타 모든 함수
  },
  modules: {
    // 쪼개기
    auth,
  },
});
