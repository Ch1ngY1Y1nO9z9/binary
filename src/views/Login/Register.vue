<script lang="ts" setup>
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

<style lang="scss" src="../../assets/css/login/login.scss" scoped></style>
