<script lang="ts" setup>
import { defineProps, reactive } from "vue";
const emit = defineEmits(["change"]);
const props = defineProps({
  title: String,
  model: String || undefined,
  msg: String || undefined,
  name: String,
  options: Array || [{}],
  defaultValue: String || "",
});

const checkValue = (e) => {
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