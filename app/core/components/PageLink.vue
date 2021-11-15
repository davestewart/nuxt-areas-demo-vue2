<template>
  <nuxt-link :to="target" :disabled="hasTarget ? undefined : 'disabled'"><slot/></nuxt-link>
</template>

<script>
import { resolve } from 'path-browserify'

function trim (path) {
  return path === '/'
    ? path
    : path.replace(/\/$/, '')
}

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    target () {
      return trim(resolve(this.$route.path, this.to))
    },

    hasTarget () {
      return this.$router.match(this.target).matched.length
    },
  },
}
</script>
