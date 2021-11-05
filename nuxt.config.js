export default {
  head: {
    title: 'Nuxt Areas Demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/purecss@2.0.6/build/pure-min.css' },
    ]
  },

  css: [
    '~/assets/styles.css',
  ],

  components: true,

  buildModules: [
    { src: 'nuxt-areas' },
  ],
}
