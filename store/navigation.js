import Vue from 'vue'

const defaultState = {
  isMenuOpened: false
}

const state = () => ({ ...defaultState })

const getters = {
  isMenuOpened: state => state.isMenuOpened
}

const actions = {
  toggleMenu(context, isMenuOpened) {
    context.commit("updateToggleMenu", isMenuOpened)
  }
}

const mutations = {
  updateToggleMenu (state, isMenuOpened) {
    Vue.set(state, 'isMenuOpened', isMenuOpened)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
