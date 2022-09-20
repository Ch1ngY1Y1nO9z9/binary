<script lang="ts" setup>

import "../../assets/css/login/login.css";
import Title from "../../utilities/Title.vue";
import LoginLayout from "../../layouts/LayoutLogin.vue";
import ForgetPassword from "../../components/Forms/ForgetPassword.vue";
</script>
        
        
<template>
  <LoginLayout>
    <template v-slot:title>
      <Title title="忘記密碼" />
    </template>
    <ForgetPassword />
  </LoginLayout>
</template>
        
        