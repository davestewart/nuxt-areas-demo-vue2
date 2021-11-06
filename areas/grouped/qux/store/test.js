export const namespace = 'qux/test'

export function state () {
  return {
    value: 5,
  }
}

export const mutations = {
  value (state, value) {
    state.value = value
  }
}
