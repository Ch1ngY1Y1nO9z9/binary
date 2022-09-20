<script lang="ts" setup>

import "../../assets/css/login/login.css";
import Title from "../../utilities/Title.vue";
import RegirsterForm from "../../components/Forms/Register.vue";
import LoginLayout from "../../layouts/LayoutLogin.vue";
</script>

<template>
  <LoginLayout>
    <template v-slot:title>
      <Title title="註冊會員" />
    </template>
    <RegirsterForm />
  </LoginLayout>
</template>
