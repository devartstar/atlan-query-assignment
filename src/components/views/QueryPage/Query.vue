<template>
  <div class="w-full h-20 bg-white m-10">
    <h2>To select / change data set go to Data Section</h2>
    Queries Present
    <div class="query-list">
      <div
        v-for="query in queryList"
        :key="query.name"
        calss="query-list-container"
      >
        <p>{{ query.name }}</p>
      </div>
    </div>
  </div>
  <!-- query list -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { QueryStore } from "../../../stores/QueryStore/QueryStore";
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
