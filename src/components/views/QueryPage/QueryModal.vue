<template>
  <h1
    class="flex items-center justify-center text-5xl font-extrabold dark:text-white mt-5"
  >
    <span
      class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"
      >Queries for</span
    >
    {{ datatableList[tableindex].title }}
  </h1>

  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select Query</label>
    <select
      id="tabs"
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="(query, index) in queryList" :key="index">
        <router-link :to="`/query/${selectedDatasetIndex}/${query.name}`">
          <p class="check">{{ query.name }}</p>
        </router-link>
      </option>
    </select>
  </div>

  <ul
    class="hidden text-md m-4 font-medium text-center text-indigo-600 divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
  >
    <li class="w-full m-2" v-for="(query, index) in queryList" :key="index">
      <router-link :to="`/query/${selectedDatasetIndex}/${query.name}`">
        <a
          class="inline-block rounded-lg p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-current="page"
        >
          {{ query.name }}
        </a>
      </router-link>
    </li>
  </ul>

  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="lg:-mx-6 lg:flex lg:items-center">
        <Editor />
        <div class="flex flex-col mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
          <router-view></router-view>
          <!-- Instead of router link I can also do it like this: <Group v-if="selectedQuery==group-by" /> but when number of query increases code becomes ugly-->
          <div class="flex items-center justify-between mt-12 lg:justify-start">
            <button
              class="p-2 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <img src="../../../assets/left_dir.svg" class="w-6 h-6" />
            </button>

            <button
              class="p-2 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
            >
              <img src="../../../assets/right_dir.svg" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Editor from "../EditorPage/Editor.vue";
import { storeToRefs } from "pinia";
import { DataStore } from "../../../stores/DataStore/DataStore";
import { QueryStore } from "../../../stores/QueryStore/QueryStore";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const queryStore = QueryStore();
const { queryList } = storeToRefs(queryStore);
const props = defineProps({
  tableindex: {
    type: Number,
    required: true,
  },
});
</script>
