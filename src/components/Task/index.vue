<template>
  <div @click="setOpenEditTask(true)" class="desk_tasks__item">
    <h5>{{ task.title }}</h5>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Task",
  props: ["task"],
  methods: {
    ...mapMutations({
      setOpenEditTask: "tasks/SET_IS_OPEN_EDIT_TASK",
    }),
  },
  beforeMount() {},
};
</script>

<style lang="scss"></style>
