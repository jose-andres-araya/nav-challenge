import Vue from 'vue'

const defaultState = {
  isMenuOpened: false
}

export const state = () => ({ ...defaultState })

export const getters = {
  isMenuOpened: state => state.isMenuOpened
}

export const actions = {
  toggleMenu(context, isMenuOpened) {
    context.commit("updateToggleMenu", isMenuOpened)
  }
}

export const mutations = {
  updateToggleMenu (state, isMenuOpened) {
    Vue.set(state, 'isMenuOpened', isMenuOpened)
  }
}
