<template>
  <section>
    <h3>User admin</h3>
    <output>
      <PageInfo />
      <StoreValue path="admin/users"/>
    </output>
    <section>
      <h3>Pages</h3>
      <ul>
        <li><page-link to="create">Create user</page-link></li>
        <li><page-link to="123">View user 123</page-link></li>
        <li><page-link to="123/edit">Edit user 123</page-link></li>
      </ul>
    </section>
  </section>
</template>
