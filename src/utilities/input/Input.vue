<script lang="ts" setup>
import { defineProps, reactive } from "vue";
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
    type: Boolean,
    default: false,
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
  <div class="input-row">
    <label class="input-label">
      {{ props.title }}
      <button v-if="props.address" type="button" class="link float-right">
        常用地址
      </button>
      <router-link
        v-if="props.password"
        class="link float-right"
        to="/forgotpassword"
      >
        忘記密碼?
      </router-link>
    </label>
    <div class="input-col" :class="{ error: props.status }">
      <input
        :type="props.type"
        class="input-control"
        :placeholder="props.placeholder"
        :value="props.model"
        @keyup="checkRules"
        @blur="checkValue"
        min="0.1"
        step="0.1"
      />
    </div>
    <span class="msg">{{ props.msg }}</span>
  </div>
</template>