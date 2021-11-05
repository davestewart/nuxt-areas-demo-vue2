<template>
  <div>
    <nav>
      <page-link to="/" class="link-home">Home</page-link>
      <page-link to="/foo">Foo</page-link>
      <page-link to="/bar">Bar</page-link>
      <page-link to="/baz">Baz</page-link>
      <page-link to="/qux">Qux</page-link>
      <page-link v-if="$route.path !== '/'" to="../" class="link-up">Up</page-link>
    </nav>
    <nuxt />
  </div>
</template>

<style>
a.link-up {
  margin-left: .5rem;
  padding-left: .5rem;
  border-left: 1px dotted #CCC;
}
</style>
