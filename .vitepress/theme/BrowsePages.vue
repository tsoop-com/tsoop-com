<script setup>
import { ref } from 'vue';
import { data as routes } from '../../pages.data.js'
import { useRoute } from 'vitepress'

const route = useRoute()

const pages = computed(() => getPages(routes))
const children = ref()
const parents = ref()
const siblings = ref()

watch(() => route.path, p => {
  p = p.replace(/\/[^/]*\.(html)$/, '/')
  children.value = pages.value[p]
  siblings.value = getSiblings(p, pages.value)
  parents.value = getParents(p, routes)
}, { immediate: true })

function getSiblings(path, pages) {
  let prev, next, index, total
  const folder = normalize(path.split("/").slice(0, -2).join("/"));
  const list = pages[folder];

  if (list) {
    total = list.length
    index = list.findIndex((page) => page.url.replace(/\/[^/]*\.(html)$/, '/') == path.replace(/\/[^/]*\.(html)$/, '/'));
    if (index >= 0 && index <= list.length) {
      prev = list[index + 1];
    }
    if (index > 0) {
      next = list[index - 1];
    }
  }
  return { next, prev, index, total }
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
        return r.url.replace(/\/[^/]*\.(html)$/, '/') == link;
      })
    );
  }
  return parents.filter(Boolean);
}


function normalize(url) {
  return (url += url.endsWith("/") ? "" : "/");
}

</script>

<template lang='pug'>
.p-2.flex.flex-col.gap-2
  .flex.flex-wrap.gap-2 
    a.p-2(v-for="parent in parents" :key="parent" :href="parent?.url") {{ parent.frontmatter.title }}
  .flex.flex-wrap.gap-2(v-if="children")
    a.p-2(v-for="child in children" :key="child" :href="child.url") {{ child.frontmatter.title }}
  .grid.grid-cols-2.gap-2 
    a.p-2(v-if="siblings.prev" :href="siblings.prev?.url") PREV: {{ siblings.prev.frontmatter.title }}
    a.p-2(v-else-if="parents.length>1" :href="parents[parents.length-2]?.url") UP: {{ parents[parents.length-2].frontmatter.title }}
    a.p-2(v-if="siblings.next" :href="siblings.next?.url") NEXT: {{ siblings.next.frontmatter.title }}
    a.p-2(v-else-if="parents.length>1" :href="parents[parents.length-2]?.url") UP: {{ parents[parents.length-2].frontmatter.title }}
</template>