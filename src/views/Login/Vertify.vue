<script lang="ts" setup>
import Title from "../../utilities/Title.vue";
import VertifyEmail from "../../components/Forms/VertifyEmail.vue";
import LoginLayout from "../../layouts/LayoutLogin.vue";
</script>
    
    
    <template>
  <LoginLayout>
    <template v-slot:title>
      <Title title="註冊會員" />
    </template>
    <VertifyEmail />
  </LoginLayout>
</template>
    <style lang="scss" src="../../assets/css/login/login.scss" scoped></style>