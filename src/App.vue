<template>
  <div id="app">
    <Calendar/>
  </div>
</template>

<script>
import Calendar from "./components/Calendar";
import * as data from "./data.js";
export default {
  name: "app",
  data() {
    return {
      data: data.data
    };
  },
  components: {
    Calendar
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color: #523f38;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
