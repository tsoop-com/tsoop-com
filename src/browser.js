import { ref, computed, watchEffect, watch } from 'vue';
import { useRoute } from 'vitepress'

const pages = ref()

const initiated = ref(false)

export function usePages(routes) {
  const children = ref()
  const parents = ref()
  const siblings = ref()

  const route = useRoute()
  pages.value = getPages(routes)

  // if (!initiated.value) {
  watchEffect(() => {
    const p = cleanLink(route.path)
    children.value = pages.value[p]
    siblings.value = getSiblings(p, routes)
    parents.value = getParents(p, routes)
  })
  //   initiated.value = true
  //   if (import.meta.hot) {
  //     import.meta.hot.on('vue-reload', () => {
  //       initiated.value = false
  //     })
  //   }
  // }

  return {
    routes, pages, siblings, children, parents
  }
}

export function useChildren(routes) {
  const route = useRoute()
  const children = ref()
  pages.value = pages.value || getPages(routes)
  watchEffect(() => {
    children.value = pages.value[cleanLink(route.path)]
  },)
  return children
}

export function useParents(routes) {
  const route = useRoute()
  const parents = ref()
  watchEffect(() => {
    parents.value = getParents(route.path, routes)
    parents.value.pop()
  },)
  return parents
}

export function getPages(routes) {
  let pages = {}
  for (let route of routes) {
    if (route.url == '/') continue
    const split = route.url.split("/").slice(0, -2).join("/");
    const folder = normalize(split);
    pages[folder] = pages[folder] || [];
    pages[folder].push(route);
  }
  for (let folder in pages) {
    pages[folder].sort((a, b) => {
      if (a.frontmatter?.date && b.frontmatter?.date) {
        return a.frontmatter.date > b.frontmatter.date ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
  return pages;
}


export function getParents(path, routes) {
  path = cleanLink(path)
  const parents = [];
  const url = path.split("/").filter(Boolean);
  for (let i = 0; i <= url.length; i++) {
    const link = normalize("/" + url.slice(0, i).join("/"))
    parents.push(
      routes.find((r) => {
        return cleanLink(r.url) == link;
      })
    );
  }
  return parents.filter(Boolean);
}


export function getSiblings(path, routes) {
  let prev, next, index, total
  const folder = normalize(path.split("/").slice(0, -2).join("/"));
  pages.value = getPages(routes)
  const list = pages.value[folder];
  if (list) {
    total = list.length
    index = list.findIndex((page) => cleanLink(page.url) == cleanLink(path));
    if (index >= 0 && index <= list.length) {
      prev = list[index + 1];
    }
    if (index > 0) {
      next = list[index - 1];
    }
  }
  return { next, prev, index, total }
}


export function normalize(url) {
  return (url += url.endsWith("/") ? "" : "/");
}

export function cleanLink(url) {
  return url.replace(/\/[^/]*\.(html)$/, '/')
}