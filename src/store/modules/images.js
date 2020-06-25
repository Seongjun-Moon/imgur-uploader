// src/store/modules/images.js
import axios from "axios";

const state = {
  images: [],
};
const getters = {
  allImages: (state) => state.images,
};
const mutations = {
  setImages: (state, images) => (state.images = images),
};
const actions = {
  fetchImages({ rootState, commit }) {
    const fullUrl = "https://api.imgur.com/3/account/me/images";
    axios
      .get(fullUrl, {
        headers: { Authorization: `Bearer ${rootState.auth.token}` },
      })
      .then((res) => commit("setImages", res.data.data))
      .catch((err) => console.log(err));
  },
  uploadImages() {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
