<template>
  <p class="value">
    state.{{ valuePath }}: <input type="number" min="0" v-model.number="value">
  </p>
</template>

<script>
function getValue (source, path) {
  const segments = path.split(/\W/)
  return segments.reduce((source, path) => {
    return source[path]
  }, source)
}

export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  },

  computed: {
    valuePath () {
      return this.path
        ? `${this.path.replace(/\//g, '.')}.value`
        : 'value'
    },

    value: {
      get () {
        return getValue(this.$store.state, this.valuePath)
      },

      set (value) {
        this.$store.commit(this.valuePath.replace(/\W/g, '/'), value)
      }
    }
  },
}
</script>

<style>
.value {
  font-family: monospace;
  font-size: .7rem !important;
}

.value input {
  width: 3.5em;
}
</style>
