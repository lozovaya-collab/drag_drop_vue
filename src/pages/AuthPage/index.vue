<template>
  <div class="auth-page">
    <div class="auth-page_form">
      <img
        class="auth-page_form__icon"
        src="@/assets/images/mountain.png"
        alt="Icon ToDo App"
      />
      <FormAuth v-model:user="user" @update:user="user = $event" />
      <div class="auth-page_form__actions">
        <Button @click="submit">{{ isSignUp ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ВОЙТИ" }}</Button>
        <Button v-if="!isSignUp" :type="'text'" @click="toSignUpForm">
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
      user: {
        login: null,
        password: null,
      },
    };
  },
  methods: {
    toSignUpForm() {
      console.log(this.isSignUp);
      this.isSignUp = true;

      this.user = {
        login: null,
        password: null,
      };
    },
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
