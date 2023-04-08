<template>
  <section class="form-auth">
    <input class="form-auth_input" type="email" placeholder="логин" />
    <input class="form-auth_input" type="password" placeholder="пароль" />
  </section>
</template>

<script>
export default {
  name: "FormAuth",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
