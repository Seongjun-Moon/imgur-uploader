// src/store/modules/images.js
import axios from "axios";
import router from "@/router/index";

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
  uploadImages({ rootState }, event) {
    const fullUrl = "https://api.imgur.com/3/image";
    const images = event.target.files;
    const config = {
      headers: {
        Authorization: `Bearer ${rootState.auth.token}`,
      },
    };

    const promises = [];

    images.forEach((image) => {
      const formData = new FormData();
      formData.append("image", image);
      const promise = axios.post(fullUrl, formData, config);
      promises.push(promise);
    });

    Promise.all(promises)
      .then(() => router.push({ name: "ImageList" }))
      .catch((err) => console.log(err));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
