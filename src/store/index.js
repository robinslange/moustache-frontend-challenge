import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    err: false,
    errMsg: null,
    success: false,
    successMsg: false,
  },
  mutations: {
    ADD_TO_CART(state, item) {
      const index = state.cart.findIndex((x) => x.size === item.size);
      console.log(state.cart);
      console.log(index);
      if (index == -1) {
        state.cart.push(item);
      } else {
        state.cart[index].quantity++;
      }
    },
    SET_ERROR_VISIBILITY(state, data) {
      state.err = data;
    },
    SET_ERR_MSG(state, msg) {
      state.errMsg = msg;
    },
    SET_SUCCESS_VISIBILITY(state, data) {
      state.success = data;
    },
    SET_SUCCESS_MSG(state, msg) {
      state.successMsg = msg;
    },
  },
  actions: {
    noSizeSelectedAlert({ commit }) {
      commit("SET_ERROR_VISIBILITY", true);
      commit("SET_ERR_MSG", "No Size Selected!");
    },
    addedToCartAlert({ commit }, item) {
      commit("SET_SUCCESS_VISIBILITY", true);
      commit(
        "SET_SUCCESS_MSG",
        `Added ${
          item.size == "S"
            ? "Small"
            : item.size == "M"
            ? "Medium"
            : item.size == "L"
            ? "Large"
            : ""
        } ${item.item} to your cart!`
      );
    },
  },
  modules: {},
});
