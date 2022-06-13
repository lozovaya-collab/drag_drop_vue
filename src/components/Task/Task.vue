<template>
  <div class="desk_tasks__item">
    <h5>{{ task.title }}</h5>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  beforeMount() {},
};
</script>

<style lang="scss" >
</style>