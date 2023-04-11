<template>
  <div class="content-task" v-if="newTask">
    <Combobox
      v-model:selected="category"
      @update:selected="category = $event"
      v-bind:list="categories"
    />
    <TextInput
      v-model="title"
      @update:modelValue="title = $event"
      :type="'text'"
      :placeholder="'название'"
    />
    <TextArea
      v-model="description"
      @update:modelValue="description = $event"
      :placeholder="'описание'"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import { Combobox, TextInput, TextArea } from "@/components/UI";

export default {
  name: "CreateTask",
  props: ["newTask"],
  emits: ["update:newTask"],
  components: {
    Combobox,
    TextInput,
    TextArea,
  },
  data() {
    return {
      selectedCategory: null,
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
    category: {
      get() {
        return this.newTask.category;
      },
      set(value) {
        this.$emit("update:newTask", {
          ...this.newTask,
          category: value,
        });
      },
    },
    title: {
      get() {
        return this.newTask.title;
      },
      set(value) {
        this.$emit("update:newTask", {
          ...this.newTask,
          title: value,
        });
      },
    },
    description: {
      get() {
        return this.newTask.description;
      },
      set(value) {
        this.$emit("update:newTask", {
          ...this.newTask,
          description: value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.content-task {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
