import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
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
  },
  actions: {},
  modules: {},
});
