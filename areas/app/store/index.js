export const actions = {
  nuxtServerInit () {
    console.log('STORE INITIALISED')
  }
}

export function state () {
  return {
    value: 1,
  }
}

export const mutations = {
  value (state, value) {
    state.value = value
  }
}
