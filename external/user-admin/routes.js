import { page } from 'nuxt-areas'

export const route = '/admin/users'

export const routes = [
  page('', 'index'),
  page('create', 'edit'),
  page(':id/edit', 'edit'),
  page(':id', 'view'),
]
