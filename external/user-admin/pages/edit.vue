<template>
  <section>
    <h3>{{ $route.path.includes('create') ? 'Create' : 'Edit' }} user</h3>
    <output>
      <PageInfo />
      <RouteParams/>
    </output>
  </section>
</template>

