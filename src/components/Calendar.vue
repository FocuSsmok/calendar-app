<template>
  <div>
    <div class="calendar">
      <Day
        v-on:deleteEvent="deleteEvent($event)"
        v-for="item in data"
        :key="item.id"
        :dayName="item.day"
        :id="item.id"
        :events="item.events"
      />
    </div>
    <AddEvent v-on:saveEvent="saveEvent($event)"/>
  </div>
</template>

<script>
import Day from "./Day";
import AddEvent from "./AddEvent";
import { data } from "../data.js";
export default {
  data() {
    return {
      data
    };
  },
  methods: {
    saveEvent(event) {
      data.forEach(item => {
        if (item.day === event.day) {
          item.events.push(event.event);
        }
      });
    },
    deleteEvent(event) {
      data.forEach(item => {
        if (item.day === event.dayName) {
          item.events.splice(event.index, 1);
        }
      });
    }
  },
  components: {
    Day,
    AddEvent
  }
};
</script>

<style lang="scss">
.calendar {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 50px auto;
  max-width: 960px;
}
</style>

