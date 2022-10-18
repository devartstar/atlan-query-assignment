<template>
  <!-- query list -->
  <router-view></router-view>
  <div v-if="selectedDatasetIndex == -1" class="w-full h-20 bg-white m-10">
    <h2>To select / change data set go to Data Section</h2>
  </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from "pinia";
// import { QueryStore } from "../../../stores/QueryStore/QueryStore";
// const queryStore = QueryStore();
// const { queryList } = storeToRefs(queryStore);

import { storeToRefs } from "pinia";
import { DataStore } from "../../../stores/DataStore/DataStore";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
</script>

<style scoped>
.query-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
