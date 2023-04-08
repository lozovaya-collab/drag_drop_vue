<template>
  <div
    class="desk"
    @drop="onDrop($event, categoryID)"
    :style="{
      height: `${
        82 + (items.filter((x) => x.categoryId === categoryID).length - 1) * 42 + 42
      }px`,
    }"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="desk_title">
      <h4>{{ categoryTitle }}</h4>
    </div>
    <div class="desk_tasks">
      <Task
        v-for="(task, index) in items.filter((x) => x.categoryId === categoryID)"
        :key="task.id"
        :style="{ top: `${index * 40}px` }"
        @dragstart="onDragStart($event, task)"
        @dragover="onDragOver(task)"
        draggable="true"
        v-bind:task="task"
      />
      <Button
        class="desk_action-btn"
        :style="{
          top: `${items.filter((x) => x.categoryId === categoryID).length * 40}px`,
        }"
        >Добавить задачу</Button
      >
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/UI";
// импорт компонента Task
import Task from "@/components/Task";

export default {
  name: "Desk",
  // входные параметры
  props: ["categories", "tasks", "categoryID", "categoryTitle"],
  components: {
    Task,
    Button,
  },
  data: () => {
    return {
      items: [],
      currTask: null,
    };
  },
  // отслеживание изменений переменной items и входного параметра tasks
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
  // инициализация items при отрисовке компонента Desk
  beforeMount() {
    this.items = this.tasks;
  },
};
</script>

<style lang="scss"></style>
