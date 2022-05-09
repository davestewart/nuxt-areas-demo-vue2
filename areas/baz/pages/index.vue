<template>
  <section>
    <header>
      <h3>Baz index</h3>
      <p>"Normal" area index using config-based routing</p>
    </header>
    <output>
      <PageInfo />
      <StoreValue path="baz"/>
    </output>
    <section>
      <h3>Pages</h3>
      <ul>
        <li><page-link to="users">Users</page-link></li>
      </ul>
    </section>
  </section>
</template>
