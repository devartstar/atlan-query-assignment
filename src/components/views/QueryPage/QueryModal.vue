<template>
  <h1 class="flex items-center text-5xl font-extrabold dark:text-white mt-5">
    <span
      class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"
      >Queries for</span
    >
    {{ datatableList[tableindex].title }}
  </h1>
  <!-- <div class="query-list">
    <div
      v-for="query in queryList"
      :key="query.name"
      calss="query-list-container"
    >
      <p>{{ query.name }}</p>
    </div>
  </div> -->
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { DataStore } from "../../../stores/DataStore/DataStore";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const props = defineProps({
  tableindex: {
    type: Number,
    required: true,
  },
});
</script>
