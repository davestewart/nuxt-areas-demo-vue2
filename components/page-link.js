/**
 * Rudimentary resolve function, as Nuxt doesn't let us import Path in the client
 *
 * @param   {string}  from
 * @param   {string}  to
 * @return  {string}
 */
function resolve (from = '', to = '') {
  // absolute to; just use to
  if (to.startsWith('/')) {
    return to
  }

  // strip consecutive //
  let target = (from + '/' + to)
  while (target.includes('//')) {
    target = target.replace(/\/\//g, '/')
  }

  // remove folder/../ pairs
  const rxUp = /[^/]+?\/..\//
  while (rxUp.test(target)) {
    target = target.replace(rxUp, '')
  }

  // if we still have .. left, we're above /, so stop at /
  if (target.includes('..')) {
    target = '/'
  }

  // return
  return target
}

export default {
  props: {
    to: {
      type: String,
      required: true,
    }
  },

  render (h) {
    const to = resolve(this.$route.path, this.to)
    const data = {
      props: {
        to
      }
    }
    return h('nuxt-link', data, [
      this.$slots.default
    ])
  }
}
