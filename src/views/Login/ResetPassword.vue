<script lang="ts" setup>
import Title from "../../utilities/Title.vue";
import LoginLayout from "../../layouts/LayoutLogin.vue";
import ResetPassword from "../../components/Forms/ResetPassword.vue";
</script>
            
            
    <template>
  <LoginLayout>
    <template v-slot:title>
      <Title title="忘記密碼" />
    </template>
    <ResetPassword />
  </LoginLayout>
</template>

<style lang="scss" src="../../assets/css/login/login.scss" scoped></style>