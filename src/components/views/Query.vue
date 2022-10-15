<template>
  <h2>This is QUERY page</h2>
  <!-- query list -->
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

<script setup lang="ts">
import { useQueryStore } from "../../stores/QueryStore";

const queryList = useQueryStore().query;
</script>

<style scoped>
.query-list {
  display: flex;
}
</style>
