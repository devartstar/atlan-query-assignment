<template>
  <div>Hello {{ tableindex }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  tableindex: {
    type: Number,
    required: true,
  },
});
</script>
