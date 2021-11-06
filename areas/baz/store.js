export function state () {
  return {
    value: 3,
  }
}

export const mutations = {
  value (state, value) {
    state.value = value
  }
}
