<template>
  <h1
    class="flex items-center justify-center text-5xl font-extrabold dark:text-white mt-5"
  >
    <span
      class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2"
      >Queries for</span
    >
    {{ datatableList[selectedDatasetIndex].title }}
  </h1>

  <div class="sm:hidden m-5">
    <label for="tabs" class="sr-only">Select Query</label>
    <select
      id="tabs"
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="(query, index) in queryList" :key="index">
        <router-link :to="`/query/${selectedDatasetIndex}/${query.name}`">
          <div class="px-5">{{ query.name }}</div>
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
        <div
          class="lg:w-1/2 mx-4 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] border-2 border-indigo-600"
        >
          <Editor :readOnly="true" />
        </div>
        <div class="flex flex-col mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
          <!-- Instead of router link I can also do it like this: <Group v-if="selectedQuery==group-by" /> but when number of query increases code becomes ugly-->
          <router-view></router-view>
        </div>
      </div>
    </div>
    <router-link to="/result">
      <div class="flex flex-col justify-center items-center">
        <Button buttonText="See Results" @click="sidebarUpdate(3)" />
      </div>
    </router-link>
  </section>
</template>

<script lang="ts" setup>
import Editor from "../EditorPage/Editor.vue";
import { storeToRefs } from "pinia";
import { DataStore } from "../../../stores/DataStore/DataStore";
import { QueryStore } from "../../../stores/QueryStore/QueryStore";
import { sidebarUpdate } from "../../../composables/Sidebar";
import { ref } from "@vue/reactivity";
import Button from "../../Utils/Button.vue";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const queryStore = QueryStore();
const { queryList } = storeToRefs(queryStore);
</script>
