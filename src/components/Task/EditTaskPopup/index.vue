<template>
  <Popup v-model:dialog="isOpenEditTask">
    <template v-slot:title> Редактировать задачу </template>
    <template v-slot:content>
      <ContentPopup v-bind:newTask="task" @update:newTask="task = $event" />
    </template>
    <template v-slot:actions>
      <Button :type="'text'" @click="closePopup">ОТМЕНА</Button>
      <Button @click="closePopup">СОХРАНИТЬ</Button>
    </template>
  </Popup>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import ContentPopup from "../ContentPopup";
import { Popup, Button } from "@/components/UI";

export default {
  name: "CreateTaskPopup",
  props: ["taskId"],
  components: {
    ContentPopup,
    Popup,
    Button,
  },
  data() {
    return {
      task: null,
    };
  },
  computed: {
    ...mapState({
      isOpenEditTask: (state) => state.tasks.isOpenEditTask,
    }),
  },
  methods: {
    ...mapMutations({
      setOpenEditTask: "tasks/SET_IS_OPEN_EDIT_TASK",
    }),
    closePopup() {
      this.setOpenEditTask(false);
    },
  },
  mounted() {
    this.task = {
      category: this.category,
      title: null,
      description: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
