import { useItems } from "../../db"

export default {
  async load() {
    const events = await useItems('events',
      {
        fields: [
          '*',
          { place: ['title'] }
        ]
      })
    return {
      events
    }
  }
}