<template>
  <div>
    <GithubCorner/>
    <img src="/nuxt-areas-demo.png" alt="Nuxt Areas Logo" id="logo">
    <nav class="main">
      <page-link to="/" class="link-home">Home</page-link>
      <span class="separator"></span>
      <page-link to="/foo">Foo</page-link>
      <page-link to="/bar">Bar</page-link>
      <page-link to="/baz">Baz</page-link>
      <span class="separator"></span>
      <page-link to="/grouped/qux">Qux</page-link>
      <page-link to="/nested/quux">Quux</page-link>
      <span class="separator"></span>
      <page-link to="/admin">Admin</page-link>
      <page-link to="/fifty-one">51</page-link>
      <template v-if="$route.path !== '/'">
        <span class="separator"></span>
        <page-link to="../" class="link-up">Up</page-link>
      </template>
    </nav>
    <nuxt />
  </div>
</template>

<style>
.separator {
  display: inline-block;
  margin: 0 .5rem;
  border-left: 1px dotted #CCC;
}
</style>
