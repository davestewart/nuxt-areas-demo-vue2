// export const namespace = 'fruit/apples'

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
