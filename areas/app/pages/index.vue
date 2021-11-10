<template>
  <section>
    <h3>Index</h3>
    <output>
      <pre>pages/index</pre>
    </output>
    <div style="display: flex">
      <section>
        <h3>Main</h3>
        <ul>
          <li><nuxt-link to="/foo">Foo</nuxt-link></li>
          <li><nuxt-link to="/bar">Bar</nuxt-link></li>
          <li><nuxt-link to="/baz">Baz</nuxt-link></li>
        </ul>
      </section>
      <section>
        <h3>Grouped</h3>
        <ul>
          <li><nuxt-link to="/grouped/qux">Qux</nuxt-link></li>
          <li><nuxt-link to="/nested/quux">Quux</nuxt-link></li>
        </ul>
      </section>
      <section>
        <h3>External</h3>
        <ul>
          <li><nuxt-link to="/admin">Admin</nuxt-link></li>
          <li><nuxt-link to="/test">Test</nuxt-link></li>
        </ul>
      </section>
    </div>
  </section>
</template>
