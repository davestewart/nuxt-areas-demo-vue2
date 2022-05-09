const splash = '/nuxt-areas-demo.png'

export const actions = {
  nuxtServerInit () {
    console.log('STORE INITIALISED')
  },

  setSplash ({ commit }, src = undefined) {
    commit('splash', src || splash)
  }
}

export function state () {
  return {
    splash,
    value: 1,
  }
}

export const mutations = {
  splash (state, value) {
    state.splash = value
  },

  value (state, value) {
    state.value = value
  }
}
