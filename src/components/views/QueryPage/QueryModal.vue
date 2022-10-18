<template>
  <h2>Hello from Query {{ tableindex }}</h2>
  <div class="query-list">
    <div
      v-for="query in queryList"
      :key="query.name"
      calss="query-list-container"
    >
      <p>{{ query.name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  tableindex: {
    type: Number,
    required: true,
  },
});
</script>
