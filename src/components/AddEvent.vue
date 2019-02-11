<template>
  <div class="new-event">
    <form action class="form">
      <div class="form__field">
        <input type="text" placeholder="New Event" v-model="event">
      </div>
      <div class="form__field">
        <label for="days"></label>
        <select name="days" id="days" v-model="selected">
          <option v-for="item in compData" :key="item.id" :value="item.day">{{item.day}}</option>
        </select>
      </div>
      <div class="form__field">
        <button @click.prevent="addEvent" class="button">Save</button>
      </div>
      <p class="form__error" :class="{active: hasError}">Pola nie mogą być puste!</p>
    </form>
  </div>
</template>

<script>
import * as data from "../data.js";
export default {
  data() {
    return { compData: data.data, selected: "", event: "", hasError: false };
  },
  created() {
    this.selected = data.data[0].day;
  },
  methods: {
    addEvent(e) {
      if (this.event !== "" && this.selected !== "") {
        this.$emit("saveEvent", {
          event: this.event,
          day: this.selected
        });
        this.event = "";
        this.selected = data.data[0].day;
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    }
  }
};
</script>

<style lang="scss">
.new-event {
  box-sizing: border-box;
  background-color: #fff;
  width: 300px;
  height: 250px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 25px;
}

.form {
  &__field {
    margin: 0 auto 20px auto;
    width: 180px;
    & input,
    select,
    option,
    button {
      width: 100%;
      font-size: 15px;
    }

    & input,
    select,
    option {
      color: #4c5454;
      padding: 8px;
    }

    & button {
      background-color: #523f38;
      border: none;
      border-radius: 5px;
      padding: 10px;
      color: #fff;
      text-transform: uppercase;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__error {
    color: crimson;
    display: none;
    &.active {
      display: block;
    }
  }
}
</style>
