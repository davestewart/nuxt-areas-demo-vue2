<template>
  <section>
    <header>
      <h3>Index</h3>
      <p>"App" area global index</p>
    </header>

    <output>
      <PageInfo />
    </output>

    <nav class="home">
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
          <li><nuxt-link to="/fifty-one">51</nuxt-link></li>
        </ul>
      </section>
    </nav>
  </section>
</template>
