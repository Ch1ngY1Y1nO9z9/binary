<script lang="ts" setup>
const emit = defineEmits(["change", "require", "reset", "checkPassword"]);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  model: {
    type: String,
    default: "",
  },
  msg: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
  rules: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: Boolean,
    default: false,
  },
  password: {
    type: Boolean,
    default: false,
  },
});

const checkValue = (e: any) => {
  if (
    props.type === "text" ||
    props.type === "password" ||
    props.type === "tel" ||
    props.type === "email"
  ) {
    if (e.target.value.length == 0 || e.target.value.trim() == "") {
      emit("require", "此欄位不可留空!", props.name);
      emit("change", "", props.name);
    } else {
      if (props.rules == "Email") {
        let myreg =
          /^[^\[\]\(\)\\<>:;,@.]+[^\[\]\(\)\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g;
        if (myreg.test(e.target.value) == false) {
          emit(
            "require",
            "請輸入正確的Email格式，如：12345@gmail.com",
            props.name
          );
        } else {
          emit("reset", props.name);
        }
      } else if (props.rules == "Comfirmation") {
        emit("checkPassword");
      } else {
        emit("reset", props.name);
      }
      emit("change", e.target.value, props.name);
    }
  } else if (props.type === "number") {
    if (e.target.value <= 0) {
      e.target.value = 1;
    }

    emit("change", e.target.value, props.name);
  }
};

const checkRules = (e: any) => {
  if (props.rules == "NumberOnly") {
    e.target.value = e.target.value.replace(/[^0-9-]/g, "");
    checkValue(e);
  } else {
    checkValue(e);
  }
};
</script>
  
  <template>
  <n-config-provider>
    <div class="input-row">
      <label class="input-label">
        {{ title }}
        <button v-if="address" type="button" class="link float-right">
          常用地址
        </button>
        <router-link
          v-if="password"
          class="link float-right"
          to="/forgotpassword"
        >
          忘記密碼?
        </router-link>
      </label>
      <div class="input-col" :class="{ error: status === 'error' }">
        <n-input
          type="text"
          :input-props="{ type: props.type }"
          :status="status"
          class="input-control"
          v-model:value="model"
        />
      </div>
      <span class="msg">{{ msg }}</span>
    </div>
  </n-config-provider>
</template>

<style lang="scss" src="../../assets/css/form.scss" scoped></style>