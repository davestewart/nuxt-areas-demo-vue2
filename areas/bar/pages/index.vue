<template>
  <section>
    <header>
      <h3>Bar index</h3>
      <p>"Normal" area index using Nuxt's file-based routing</p>
    </header>
    <output>
      <PageInfo/>
      <StoreValue path="bar"/>
    </output>
    <section>
      <h3>Pages</h3>
      <ul>
        <li><page-link to="users">Users</page-link></li>
      </ul>
    </section>
  </section>
</template>
