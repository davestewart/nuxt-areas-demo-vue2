export const namespace = '/admin/users'

export function state () {
  return {
    value: 6,
  }
}

export const mutations = {
  value (state, value) {
    state.value = value
  }
}
