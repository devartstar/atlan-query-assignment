<template>
  <transition name="fade">
    <div>
      <div class="absolute left-0 bg-black opacity-70 inset-0 t-0 z-0"></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-3 rounded-xl shadow-lg bg-white"
      >
        <div>
          <div class="text-center p-3 flex-auto justify-center leading-6">
            <h2 class="text-2xl font-bold py-4">
              <span class="font-bold"># {{ tableindex }}</span>
              {{ datatableList[tableindex].title }}
            </h2>
            <p class="text-md text-gray-500 px-8">Display the table</p>
          </div>
          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <router-link :to="`/query/${tableindex}`">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                @click="sidebarUpdate(2)"
              >
                SELECT
              </button>
            </router-link>

            <router-link to="/datatable">
              <button
                class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >
                CLOSE
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { DataStore } from "../../../stores/DataStore/DataStore";
import { sidebarUpdate } from "../../../composables/Sidebar";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const props = defineProps({
  tableindex: {
    type: Number,
    required: true,
  },
});
// console.log(props.tableindex);
selectedDatasetIndex.value = props.tableindex;
</script>

<style scoped></style>
