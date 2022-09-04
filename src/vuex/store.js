import axios from "axios";
import { createStore } from "vuex";


const store = createStore({
  state: () => ({
     products: [],
     cart: []
  }),
  getters: {

  },
  mutations: {
    SET_PRODUCT_TO_STATE (state, products) {
      state.products = products;
    },
    SET_CART_TO_STATE (state, payload) {
      

      if (state.cart.length) {
        let isProductExists = false
        state.cart.map((item) => {

          if (item.article === payload.article) {
            isProductExists = true
            item.quantity++
          }          
        })
        if (!isProductExists) {
          payload.quantity = 1
          state.cart.push(payload)
        }
      }
      else {
        payload.quantity = 1
        state.cart.push(payload)          
      }
    },
    REMOVE_FROM_CART (state, index) {
      state.cart.splice(index, 1)
    },
    INCREMENT (state,index) {
      state.cart[index].quantity++
    },
    DECREMENT (state,index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
      
    }
  }, 
  actions: {
    GET_PRODUCTS_FROM_API ({ commit }) {
      return axios('http://localhost:3000/products',{
        method: 'GET'
      })
      .then((res) => {
        commit('SET_PRODUCT_TO_STATE', res.data);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      })
    },
    ADD_TO_CART ({commit}, data) {
      commit('SET_CART_TO_STATE', data)
    },
    DELETE_FROM_CART ({commit}, data) {
      commit('REMOVE_FROM_CART', data)
    },
    INCREMENT_CART_ITEM ({ commit }, index) {
      commit('INCREMENT', index)
    },   
    DECREMENT_CART_ITEM ({ commit }, index) {
      commit('DECREMENT', index)
    }       
  }
})

export default store;