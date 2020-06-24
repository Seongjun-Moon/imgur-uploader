import qs from "qs";
import router from "@/router";

const state = {
  token: null,
};
const getters = {
  isLoggedIn: (state) => !!state.token,
};
const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};
const actions = {
  logout({ commit }) {
    // state.token 값 null로 바꾸기
    commit("setToken", null); //mutations의 setToken 함수 불러오기
  },
  login() {
    const ROOT_URL = "https://api.imgur.com";
    const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    const fullUrl = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    window.location.href = fullUrl;
  },
  finalizeLogin({ commit }, hashString) {
    const queryObject = qs.parse(hashString.replace("#", ""));
    console.log(queryObject);
    commit("setToken", queryObject.access_token);
    router.push("/");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

`http://localhost:8080/oauth2/callback
#
access_token=f681d6402b4fea4afbad71c98740f5666c5ddcb8
&
expires_in=315360000
&
token_type=bearer
&
refresh_token=15c2c107ab49267d8b465b3c706f4dda3fc997a8
&
account_username=SeongjunMoon
&
account_id=133451143`;
