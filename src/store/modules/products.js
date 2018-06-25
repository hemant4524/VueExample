import shop from '../../api/shop'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
    setProducts(state, jokes) {
        state.all = jokes
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}