<template>
  <!-- query list -->
  <router-view></router-view>
  <div v-if="selectedDatasetIndex == -1" class="bg-white dark:bg-gray-800">
    <div
      class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
    >
      <h2 class="text-3xl font-bold text-black dark:text-white sm:text-4xl">
        <span class="block"> No Dataset Selcted to perform Queries !!! </span>
        <span class="block text-indigo-500 mt-12 font-extrabold">
          Select a Dataset
        </span>
      </h2>
      <div class="lg:mt-0 lg:flex-shrink-0">
        <div class="mt-3 inline-flex rounded-md shadow">
          <router-link to="/datatable">
            <Button buttonText="Data" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { DataStore } from "../../../stores/DataStore/DataStore";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
import Button from "../../Utils/Button.vue";
</script>

<style scoped>
.query-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
