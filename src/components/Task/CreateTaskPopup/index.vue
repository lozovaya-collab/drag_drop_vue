<template>
  <Popup v-model:dialog="isOpenCreateTask">
    <template v-slot:title> Создать задачу </template>
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

import ContentPopup from "./ContentPopup";
import { Popup, Button } from "@/components/UI";

export default {
  name: "CreateTaskPopup",
  props: ["category"],
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
      isOpenCreateTask: (state) => state.tasks.isOpenCreateTask,
    }),
  },
  methods: {
    ...mapMutations({
      setIsOpenCreateTask: "tasks/SET_IS_OPEN_CREATE_TASK",
    }),
    closePopup() {
      console.log("close");
      this.setIsOpenCreateTask(false);
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
