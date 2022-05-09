<template>
  <section>
    <header>
      <h3>Foo index</h3>
      <p>"App" area index, using Nuxt's file-based routing</p>
    </header>

    <output>
      <PageInfo />
      <StoreValue />
    </output>

    <section>
      <h3>Pages</h3>
      <ul>
        <li><page-link to="users">Users</page-link></li>
      </ul>
    </section>
  </section>
</template>
