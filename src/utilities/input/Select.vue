<script lang="ts" setup>
import { defineProps, reactive, PropType } from "vue";
const emit = defineEmits(["change"]);
interface option {
  value: string;
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    default: '',
  },
  msg: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<option[]>,
    required: true,
  },
  defaultValue: {
    type: String,
    default: '',
  },
});

const checkValue = (e: any) => {
  emit("change", e.target.value, props.name);
};
</script>
    
<template>
  <div class="input-row">
    <label for="chain" class="input-label">{{ props.title }}</label>
    <div class="input-col">
      <select class="input-control" @change="checkValue">
        <option
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
          :selected="option.value === props.defaultValue"
        >
          {{ option.value }}
        </option>
      </select>
      <div class="arrow">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/form.scss" scoped></style>