<template>
  <section>
    <header>
      <h3>Qux index</h3>
      <p>"Grouped" area index using config-based routing</p>
    </header>
    <output>
      <PageInfo />
      <StoreValue path="grouped/qux"/>
      <StoreValue path="grouped/qux/test"/>
    </output>
    <section>
      <h3>Pages</h3>
      <ul>
        <li><page-link to="users">Users</page-link></li>
      </ul>
    </section>
  </section>
</template>
