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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/purecss@2.0.6/build/pure-min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap' },
    ]
  },

  css: [
    '~/assets/styles.css',
  ],

  components: true,

  buildModules: [
    { src: 'nuxt-areas' },
  ],

  areas: {
    base: 'app',
    app: 'core',
    debug: true,
    packages: [
      {
        src: '~/packages/admin',
        route: '/admin'
      },
      {
        src: '~/packages/user-admin',
        route: '/admin/users',
        namespace: '/admin/users'
      },
      {
        src: '~/packages/fifty-one',
        route: '/fifty-one'
      },
    ]
  }
}
