---
dynamic: true
---

<script setup>
import { useData } from 'vitepress'
const { params, frontmatter } = useData()
</script>

> {{ params.announce }}

<!-- @content -->

<pre class="text-xs">{{ frontmatter }}</pre>
