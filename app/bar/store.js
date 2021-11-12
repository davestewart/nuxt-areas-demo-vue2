export function state () {
  return {
    value: 2,
  }
}

export const mutations = {
  value (state, value) {
    state.value = value
  }
}
