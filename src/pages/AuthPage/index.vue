<template>
  <div class="auth-page">
    <div class="auth-page_form">
      <img
        class="auth-page_form__icon"
        src="@/assets/images/mountain.png"
        alt="Icon ToDo App"
      />
      <FormAuth />
      <div class="auth-page_form__actions">
        <Button @click="submit">{{ isSignUp ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ВОЙТИ" }}</Button>
        <Button v-if="!isSignUp" :type="'text'" @click="isSignUp = true">
          Зарегистрироваться
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/UI";
import FormAuth from "@/components/FormAuth";

export default {
  name: "AuthPage",
  components: {
    FormAuth,
    Button,
  },
  data() {
    return {
      isSignUp: false,
    };
  },
  methods: {
    submit() {
      return this.isSignUp ? this.signUp() : this.logIn();
    },
    signUp() {
      console.log("sign up");
    },
    logIn() {
      console.log("log in");
    },
  },
  mounted() {
    this.isSignUp = false;
  },
};
</script>

<style lang="scss" scoped></style>
