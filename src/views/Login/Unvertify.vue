<script lang="ts" setup>

import "../../assets/css/login/login.css";
import Title from "../../utilities/Title.vue";
import LoginLayout from "../../layouts/LayoutLogin.vue";
import Unvertify from "../../components/Login/Unvertify.vue";
</script>
    
    
    <template>
  <LoginLayout>
    <template v-slot:title>
      <Title title="會員登入" />
    </template>
    <Unvertify />
  </LoginLayout>
</template>
    
    