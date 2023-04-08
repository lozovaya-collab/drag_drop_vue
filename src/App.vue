<template>
  <v-app>
    <MainHeader v-if="$route.path !== '/auth'" />
    <MainContent />

    <Popup></Popup>
  </v-app>
</template>

<script>
import { MainHeader, MainContent } from "@/layouts";
import { Popup } from "@/components/UI";

export default {
  name: "App",
  components: {
    MainHeader,
    MainContent,
    Popup,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
