<script lang="ts" setup>

import "../../assets/css/login/login.css";
import Title from "../../utilities/Title.vue";
import LoginForm from "../../components/Forms/Login.vue";
import LoginLayout from "../../layouts/LayoutLogin.vue";
</script>


<template>
  <LoginLayout>
    <template v-slot:title>
      <Title title="歡迎回來" />
    </template>
    <LoginForm />
  </LoginLayout>
</template>
