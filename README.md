# Nuxt Areas Demo

> Demo project to showcase Nuxt Areas functionality

## Overview

[Nuxt Areas](https://github.com/davestewart/nuxt-areas) is a Nuxt module which enables you to group together related content (pages, stores, components, etc) in discrete folders called "areas".

This repository demos some of the main features of the module, including:

- [Nuxt functionality](#nuxt-functionality)
- [Areas functionality](#areas-functionality)
- [Custom routing](#custom-routing)
- [Grouping](#grouping)
- [App folder](#app-folder)

The demo itself is a simple Nuxt site, with pages and stores under routes / folders `foo`, `bar`, `baz`, `qux`.

## Getting started

Run the demo from the terminal with:

```bash
$ npm run dev
```

In your browser, navigate to [localhost:3000](http://localhost:3000) to view the site.

To understand how things fit together, run the site side-by-side with your IDE so you can see how Areas silos similar files together, and builds the routes accordingly:

```
+- src
    +- areas
    |   +- app
    |   +- bar
    |   +- baz
    |   +- ...
    +- assets
    +- components
    +- layouts
    +- pages
    +- static
    +- store
```

## Demo features

### Nuxt functionality

> Run side-by-side with your existing pages structure:

```
+- src
    +- areas                    <-- areas – does nothing without content
    |
    +- pages
    |   +- foo                  <-- nuxt pages
    |      +- ...
    +- store                    <-- nuxt stores
           +- ...
```

In the demo, click the [Foo](https://localhost:3000/foo) link and navigate child links.

Note that these are Nuxt's standard pages, nested under the normal Nuxt `/pages` folder, and the store is the route store with no changes.

### Areas functionality

> Group related files under a named "area":

```
+- src
    +- areas
        +- bar                  <-- named area
            |
            +- pages            <-- pages - generates routes automatically
            |   +- ...
            |
            +- store.js         <-- store - is namespaced automatically
```

Next, click the [Bar](https://localhost:3000/bar) link, but this time note how everything is nested under `/areas/bar`.

The routes are generated from `/areas/bar/pages` using Nuxt's own algorithm. 

Additionally, stores are namespaced to `bar` so `$store.state.bar.value` can be wired normally.

### Custom routing

> Override the auto-generated routes for individual areas:

```
+- src
    +- areas
        +- baz
           +- pages             <-- custom pages structure (not using _id)
           |   +- ...
           +- area.config.js    <-- customise routes configuration
```
Click the [Baz](https://localhost:3000/baz) link, click into the Users links, and notice the routes are not using Nuxt's filesystem routing.

Areas enables you to override generated routing for an area by including an `areas.config.js` file and exporting a constant `routes` which should be an array of (simplified) route definitions:

````ts
export const routes = [
    { path: string, component: string, children: route[] }
]
````

Note that you must declare all top level routes using `/absolute` path notation; Areas will not programatically prepend the name of the folder! 

### Grouping

> Use intermediary folders to modify paths for multiple areas

```
+- src
    +- areas
        +- grouped              <-- structural grouping
            +- qux
            |   +- pages
            |       +- ...
            +- area.config.js   <-- customise leading path
```

There may be times when you need a common route, or just want to structurally group areas without adding a route.

Click the [Qux](https://localhost:3000/qux) link, and notice how the user links are not using Nuxt's filesystem routing.

### App folder

> Move app-specific Nuxt folders to a new home 

```
+- src
    +- areas
    |   +- app                  <-- move root-level content to special "app" folder
    |   |   +- components
    |   |   | +- ...
    |   |   +- layouts
    |   |   | +- ...
    |   |   +- pages
    |   |   | +- ...
    |   |   +- store
    |   |     +- ...
    |   +- ...
    +- assets                   <-- global nuxt folders sit in the route
    +- services
    +- static
```

Areas supports a specially-named area called "app".

This is designed to let you move your root-level `layouts`, `pages`, and `store` folders under your main `areas` folder to keep the root of your project clean.

To test this out, move these folders under `areas/app` and restart the server
