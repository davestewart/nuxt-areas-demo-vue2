import { page } from 'nuxt-areas'

export const routes = [
  page('', 'index'),
  page('users', 'users', [
    page('', 'users/index'),
    page('create', 'users/edit'),
    page(':id/edit', 'users/edit'),
    page(':id', 'users/view'),
  ]),
]
