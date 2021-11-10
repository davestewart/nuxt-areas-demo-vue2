export function state () {
  return {
    value: 4,
  }
}

export const mutations = {
  value (state, value) {
    state.value = value
  }
}
