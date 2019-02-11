<template>
  <div class="event">
    <p>{{text}}</p>
    <span class="event__remove" @click="removeEvent">
      <font-awesome-icon icon="trash-alt"/>
    </span>
  </div>
</template>

<script>
export default {
  props: ["text", "index"],
  methods: {
    removeEvent(e) {
      this.$emit("deleteEvent", {
        index: this.index
      });
    }
  }
};
</script>

<style lang="scss">
.event {
  background-color: #1ea896;
  width: 80%;
  margin: 8px auto;
  padding: 10px;
  &__remove {
    display: inline-block;
    border: 1px solid #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    line-height: 30px;
    margin-top: 5px;
    transition: all 0.3s linear;
    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #1ea896;
    }
  }
}
</style>
