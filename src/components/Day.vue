<template>
  <div class="day">
    <header>
      <h3>{{dayName}}</h3>
    </header>
    <div class="body">
      <p>{{id}}</p>
      <Event
        v-on:deleteEvent="deleteEvent($event)"
        v-for="(event, index) in events"
        :key="index"
        :text="event"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import Event from "./Event";
export default {
  props: ["id", "dayName", "events"],
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    deleteEvent(index) {
      let indexTmp = index.index;
      console.log(indexTmp);
      this.$emit("deleteEvent", { index: indexTmp, dayName: this.dayName });
    }
  },
  components: {
    Event
  }
};
</script>

<style lang="scss">
.day {
  min-width: 200px;
  max-width: 400px;
  background-color: #4c5454;
  margin-right: 20px;
  margin-bottom: 20px;
  color: #fff;
  padding: 0 0 20px 0;
  & header {
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
  }
  & .body {
    padding-top: 10px;
  }
}
</style>
