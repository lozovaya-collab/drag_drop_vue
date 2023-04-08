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
      v-bind:categoryTitle="category.title"
      v-bind:tasks="tasks"
    />
  </div>
</template>

<script>
import Desk from "@/components/Desk";

export default {
  name: "HomePage",
  components: {
    Desk,
  },
  data: () => {
    return {
      tasks: [
        {
          id: 2,
          title: "Вымыть полы",
          categoryId: 2,
        },
        {
          id: 1,
          title: "Сходить к стоматологу",
          categoryId: 0,
        },
        {
          id: 0,
          title: "Написать отчет",
          categoryId: 1,
        },
        {
          id: 3,
          title: "Вынести мусор",
          categoryId: 2,
        },
        {
          id: 4,
          title: "Сходить в магазин",
          categoryId: 0,
        },
        {
          id: 5,
          title: "Купить овощи",
          categoryId: 0,
        },
        {
          id: 6,
          title: "Встреча с родителями",
          categoryId: 2,
        },
      ],
      categories: [
        {
          id: 0,
          title: "Сделать",
        },
        {
          id: 1,
          title: "В процессе",
        },
        {
          id: 2,
          title: "Закончено",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
