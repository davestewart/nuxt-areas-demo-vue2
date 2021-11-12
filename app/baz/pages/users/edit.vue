<template>
  <section>
    <h3>{{ $route.path.includes('create') ? 'Create' : 'Edit' }} user</h3>
    <output>
      <pre>app/baz/pages/users/edit</pre>
    </output>
  </section>
</template>

