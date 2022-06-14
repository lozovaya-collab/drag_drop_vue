<template>
  <div class="todo-app">
    <div
      v-for="category in categories"
      :key="category.id"
      class="desk"
      @drop="onDrop($event, category.id)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div class="desk_title">
        <h4>{{ category.title }}</h4>
      </div>
      <div class="desk_tasks">
        <Task
          v-for="(task, index) in items.filter(
            (x) => x.categoryId === category.id
          )"
          :key="task.id"
          :style="{ top: `${index * 40}px` }"
          @dragstart="onDragStart($event, task)"
          @dragover="onDragOver(task)"
          draggable="true"
          v-bind:task="task"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Task from "../../components/Task/Task";

export default {
  name: "Desk",
  props: ["categories", "tasks"],
  components: {
    Task,
  },
  data: () => {
    return {
      items: [],
      desks: [],
      categotyTasks: [],
      currTask: null,
    };
  },
  watch: {
    tasks: {
      handler() {
        this.items = this.tasks;
      },
      deep: true,
    },
    items() {
      this.$emit("update:tasks", this.items);
    },
  },
  methods: {
    onDragStart(event, task) {
      event.dataTransfer.dropEffect = "none";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskId", task.id.toString());
    },
    onDrop(event, categoryId) {
      event.dataTransfer.dropEffect = "move";
      const taskId = parseInt(event.dataTransfer.getData("taskId"));
      this.items.value = this.items.map((x) => {
        if (x.id == taskId) {
          this.addTaskToArray(this.currTask, x, this.items);
          x.categoryId = categoryId;
        }
        return x;
      });
    },
    onDragOver(task) {
      this.currTask = task;
    },
    addTaskToArray(inputTask, pointerTask, arr) {
      const index = arr.findIndex((el) => el.id === pointerTask.id);

      return index !== -1
        ? [...arr.slice(0, index + 1), inputTask, ...arr.slice(index + 1)]
        : arr;
    },
  },
  beforeMount() {
    this.items = this.tasks;
  },
};
</script>

<style lang="scss" >
</style>