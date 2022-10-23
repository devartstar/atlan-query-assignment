<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <h2
        v-if="datatableList.length == 0"
        class="text-4xl text-indigo-600 mx-auto mt-10 font-semibold"
      >
        Import Datasets for Queries
      </h2>
      <div
        v-for="(datatable, index) in datatableList"
        :key="index"
        class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 relative"
        :class="
          index === selectedDatasetIndex ? `border-2 border-indigo-600` : ``
        "
      >
        <router-link :to="`/datatable/${index}`">
          <div
            class="hover:background-black z-50 transition duration-150 ease-out m"
          >
            <img
              :src="datatable.image == '' ? uploadDatabase : datatable.image"
              alt="Dataset Image"
              class="w-full h-96 object-cover object-center rounded-lg shadow-md"
            />
          </div>
        </router-link>

        <span
          class="text-2xl absolute top-0 right-0 text-indigo-600 hover:text-red-600 m--2"
          @click="removeTable(index)"
          ><Icon icon="ant-design:close-circle-filled"
        /></span>
        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg h-52">
            <h4
              class="mt-1 text-xl font-semibold uppercase leading-tight truncate"
            >
              {{ datatable.title }}
            </h4>

            <div class="mt-1 text-gray-600">
              {{ datatable.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/datatable/import">
    <div class="flex flex-col justify-center items-center mt-10">
      <Button buttonText="Import CSV" />
    </div>
  </router-link>

  <router-view></router-view>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import { DataStore } from "../../../stores/DataStore/DataStore";
import uploadDatabase from "../../../assets/uploadedData.png";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
// console.log(selectedDatasetIndex.value);
// not updating with new selected index - force re-render component

import Button from "../../Utils/Button.vue";
import { sidebarUpdate } from "../../../composables/Sidebar";
// import { onMounted } from "@vue/runtime-core";
// onMounted(() => {
//   if (localStorage.tables) {
//     datatableList.value = JSON.parse(localStorage.tables);
//   }
// });
function removeTable(index) {
  console.log("okk");
  console.log(datatableList.value);
  datatableList.value.splice(index, 1);
  console.log(datatableList.value);
  // localStorage.tables = JSON.stringify(datatableList.value);
  if (index == selectedDatasetIndex.value) {
    selectedDatasetIndex.value = -1;
  }
}
</script>
