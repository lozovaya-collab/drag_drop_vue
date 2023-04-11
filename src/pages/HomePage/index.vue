<template>
  <!--Доски с задачами-->
  <div class="todo-app">
    <!--Компонент Desk, куда передается: 
      categories - массив с названием категории и id
      tasks - массив с названием задач, id и id категории -->
    <Desk
      v-for="category in categories"
      :key="category.id"
      v-bind:categoryID="category.id"
      v-bind:categoryTitle="category.name"
      v-bind:tasks="tasks"
    />
  </div>
  <EditTaskPopup />
</template>

<script>
import { mapState } from "vuex";

import Desk from "@/components/Desk";
import EditTaskPopup from "@/components/Task/EditTaskPopup";

export default {
  name: "HomePage",
  components: {
    Desk,
    EditTaskPopup,
  },
  data: () => {
    return {
      tasks: [
        {
          id: 2,
          title: "Вымыть полы",
          categoryId: 3,
        },
        {
          id: 1,
          title: "Сходить к стоматологу",
          categoryId: 1,
        },
        {
          id: 0,
          title: "Написать отчет",
          categoryId: 2,
        },
        {
          id: 3,
          title: "Вынести мусор",
          categoryId: 3,
        },
        {
          id: 4,
          title: "Сходить в магазин",
          categoryId: 1,
        },
        {
          id: 5,
          title: "Купить овощи",
          categoryId: 1,
        },
        {
          id: 6,
          title: "Встреча с родителями",
          categoryId: 3,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
