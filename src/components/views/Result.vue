<template>
  <div class="w-full max-w-sm flex flex-col mx-auto text-center mt-5">
    <div
      x-data="{ selected: true }"
      class="w-full rounded bg-white h-auto m-auto shadow flex flex-col p-8 pt-6 rounded-xl"
    >
      <h1 class="text-indigo-600 font-bold">Toggle Editor</h1>

      <div class="relative w-full mt-4 rounded-md border h-10 p-1 bg-gray-200">
        <div class="relative w-full h-full flex items-center">
          <div
            @click="editorDisplay = !editorDisplay"
            class="w-full flex justify-center text-gray-400 cursor-pointer"
          >
            <button>Show</button>
          </div>
          <div
            @click="editorDisplay = !editorDisplay"
            class="w-full flex justify-center text-gray-400 cursor-pointer"
          >
            <button>Hide</button>
          </div>
        </div>

        <span
          :class="{
            'left-1/2 -ml-1 text-gray-800': !editorDisplay,
            'left-1 text-indigo-600 font-semibold': editorDisplay,
          }"
          class="bg-white shadow text-sm flex items-center justify-center w-1/2 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute"
        ></span>
      </div>
    </div>
  </div>
  <div class="flex justify-center m-3 container">
    <div
      v-if="editorDisplay"
      class="lg:w-1/2 mx-4 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] border-2 border-indigo-600"
    >
      <p class="mb-5 text-indigo-600 text-center text-lg font-bold">
        Modify Query Code and Play Around !!!
      </p>
      <Editor :readOnly="false" />
    </div>
    <div
      v-if="!editorDisplay"
      class="lg:w-full mx-4 lg:mx-6 w-full h-96 lg lg:h-[36rem]"
    >
      <ShowTable :tableData="resultData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { DataStore } from "../../stores/DataStore/DataStore";
import { ResultStore } from "../../stores/ResultStore/ResultStore";
const dataStore = DataStore();
const resultStore = ResultStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const { resultData } = storeToRefs(resultStore);
import Editor from "./EditorPage/Editor.vue";
import ShowTable from "./DataTables/ShowTable.vue";
const editorDisplay = ref(false);
</script>
