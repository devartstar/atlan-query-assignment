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
import { storeToRefs } from "pinia";
import { QueryStore } from "../../stores/QueryStore/QueryStore";
const queryStore = QueryStore();
const { queryList } = storeToRefs(queryStore);
</script>

<style scoped>
.query-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
