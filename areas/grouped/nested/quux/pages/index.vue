<template>
  <section>
    <h3>Quux index</h3>
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
