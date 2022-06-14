<template>
  <v-app>
    <h1>DRAG AND DROP POJECT</h1>

    <Desk
      class="todo-app"
      v-bind:categories="categories"
      v-bind:tasks="tasks"
    />
  </v-app>
</template>

<script>
import Desk from "../src/components/Desk/Desk";

export default {
  name: "App",
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

<style lang="scss">
@import "./assets/scss/main.scss";

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  @include title($black);
  font-size: 25px;
  margin: 20px 0;
  padding: 0 0 10px 0;
  border-bottom: 2px solid $purple;
}
</style>
