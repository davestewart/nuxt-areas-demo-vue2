<template>
  <section>
    <header>
      <h3>Quux index</h3>
      <p>"Nested" index page using config-based routing</p>
    </header>
    <output>
      <PageInfo />
      <StoreValue path="nested/quux"/>
      <StoreValue path="nested/quux/test"/>
    </output>
    <section>
      <h3>Pages</h3>
      <ul>
        <li><page-link to="users">Users</page-link></li>
      </ul>
    </section>
  </section>
</template>
