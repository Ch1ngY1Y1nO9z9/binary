<script lang="ts" setup>
import { defineProps, reactive } from "vue";

const emit = defineEmits(["change", "require", "sendValidateCode", "reset"]);
const props = defineProps({
  name: String,
  title: String,
  type: String || undefined,
  placeholder: String || undefined,
  model: String || undefined,
  msg: String || undefined,
  status: Boolean || false,
  buttonSwitch: Boolean || false,
  time: Number || 0,
});

const checkValue = (e) => {
  if (e.target.value.length == 0 || e.target.value.trim() == "") {
    emit("require", "此欄位不可留空!", props.name);
    emit("change", "", props.name);
  } else {
    console.log(123);
    emit("reset", props.name);
    emit("change", e.target.value, props.name);
  }
};
</script>
    
    <template>
  <div class="input-row">
    <label for="vertify_code" class="input-label">{{ props.title }}</label>
    <div class="input-col" :class="{ error: props.status }">
      <input
        id="vertify_code"
        :type="props.type"
        class="input-control"
        :placeholder="props.placeholder"
        :value="props.model"
        @blur="checkValue"
      />
      <button
        v-if="!props.buttonSwitch"
        type="button"
        class="sent-validate-code"
        @click="$emit('sendValidateCode')"
      >
        發送驗證碼
      </button>
      <button
        v-if="props.buttonSwitch"
        type="button"
        class="sent-validate-code"
      >
        {{ props.time }}秒後再點擊發送
      </button>
    </div>
    <span class="msg">{{ props.msg }}</span>
  </div>
</template>