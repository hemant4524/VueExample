import joke from '../../api/joke'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllJokes ({ commit }) {
    joke.getJokes(jokes => {
      commit('setJokes', jokes)
    })
  }
}

// mutations
const mutations = {
  setJokes (state, jokes) {
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