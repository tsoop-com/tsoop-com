---
title: Events API test
description: API
---

<script setup>
import { data } from './events.data'
import EventCard from './EventCard.vue'
const events = data.events
</script>

Every Thursday at Pirate Bay we have a Music Geeks Meetup. Everyone, who is interested in any way of music, can come and share their passions with other curious people. We jam some grooves, share some ideas and thoughts and then try to combine all that into some creative output like a performance, a recording, a music instrument, or a whole setup of them.

The community oscillates, people come and go, but the format grows and builds momentum. So see you next Thursday at 7 PM at the [Pirate Bay FabLab, Phuket, Thailand](https://chromatone.center/academy/centers/phuket/)!

<div v-for="event in events" :key="event">
  <a :href="`/events/api/${event.slug}.html`" >{{ event.title }} </a>
</div>
