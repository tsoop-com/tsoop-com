import { ref, computed, watchEffect, watch } from 'vue';
import { data } from '../../../pages.data.js'
import { useRoute } from 'vitepress'

export const pages = computed(() => getPages(data))

export function usePages(routes = data) {

  const route = useRoute()
  const children = ref()
  const parents = ref()
  const siblings = ref()

  watch(() => route.path, p => {
    p = cleanLink(p)
    children.value = pages.value[p]?.reverse()
    siblings.value = getSiblings(p, pages.value)
    parents.value = getParents(p, routes)
  }, { immediate: true })

  return {
    routes, pages, siblings, children, parents
  }
}

export function useChildren(routes = data) {
  const route = useRoute()
  const children = ref()
  watchEffect(() => {
    const p = cleanLink(route.path)
    children.value = pages.value[p]?.sort((a, b) => {
      if (a.frontmatter?.date && b.frontmatter?.date) {
        return a.frontmatter.date > b.frontmatter.date ? -1 : 1;
      } else {
        return 0;
      }
    }).reverse();
  },)
  return children
}

export function useParents(routes = data) {
  const route = useRoute()
  const parents = ref()
  watchEffect(() => {
    const p = cleanLink(route.path)
    parents.value = getParents(p, routes)
    parents.value.pop()
  },)
  return parents
}

function getPages(routes) {
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


function getParents(path, routes) {
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


function getSiblings(path, pages) {
  let prev, next, index, total
  const folder = normalize(path.split("/").slice(0, -2).join("/"));
  const list = pages[folder];

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


function normalize(url) {
  return (url += url.endsWith("/") ? "" : "/");
}

function cleanLink(url) {
  return url.replace(/\/[^/]*\.(html)$/, '/')
}