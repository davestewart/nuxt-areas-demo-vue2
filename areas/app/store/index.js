const splash = '/nuxt-areas-demo.png'

export const actions = {
  nuxtServerInit () {
    console.log('STORE INITIALISED')
  },

  setSplash ({ commit }, src = '') {
    commit('splash', src || splash)
  },
}

export function state () {
  return {
    value: 1,
    splash,
  }
}

export const mutations = {
  value (state, value) {
    state.value = value
  },

  splash (state, value) {
    state.splash = value
  },
}
