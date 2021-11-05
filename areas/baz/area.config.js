import { page } from 'nuxt-areas'

export const routes = [
  page('/baz', 'index'),
  page('/baz/users', 'users', [
    page('', 'users/index'),
    page('create', 'users/edit'),
    page(':id/edit', 'users/edit'),
    page(':id', 'users/view'),
  ]),
]

// rename routes.js and route() to pages.js and page()

// Or, area.config.js and export const pages = {}

// should also scan for area.config.js to determine nested routes
