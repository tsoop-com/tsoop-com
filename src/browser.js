import { ref, computed, watchEffect, watch } from 'vue';
import { useRoute } from 'vitepress'

export const pages = ref()


export function usePages(routes) {
  const route = useRoute()

  pages.value = pages.value || getPages(routes)

  const children = computed(() => pages.value[cleanLink(route.path)])
  const parents = computed(() => getParents(route.path, routes))
  const siblings = computed(() => getSiblings(route.path, routes))

  return {
    routes, pages, siblings, children, parents
  }
}

export function useChildren(routes) {
  pages.value = pages.value || getPages(routes)
  const route = useRoute()
  return computed(() => pages.value[cleanLink(route.path)])
}

export function useParents(routes) {
  const route = useRoute()
  return computed(() => getParents(route.path, routes).slice(0, -1))
}

export function getPages(routes) {
  let pageList = {}
  for (let route of routes) {
    if (route.url == '/') continue
    const split = route.url.split("/").slice(0, -2).join("/");
    const folder = normalize(split);
    pageList[folder] = pageList[folder] || [];
    pageList[folder].push(route);
  }
  for (let folder in pageList) {
    pageList[folder].sort((a, b) => {
      if (a.frontmatter?.date && b.frontmatter?.date) {
        return a.frontmatter.date > b.frontmatter.date ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
  return pageList;
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
  pages.value = pages.value || getPages(routes)
  const list = pages.value[folder]

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