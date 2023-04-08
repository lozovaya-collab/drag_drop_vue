<template>
  <button :class="['button', { 'button--text': type === 'text' }]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.button {
  box-sizing: border-box;
  padding: 5px 10px;
  height: 30px;
  min-width: 200px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: $purple;
  color: $white;
  &--text {
    background-color: $white;
    color: $purple;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
