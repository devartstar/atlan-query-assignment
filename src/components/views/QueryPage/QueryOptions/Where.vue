<template>
  <h2 class="mb-5 mx-auto">Columns to Query Upon</h2>
  <div class="flex items-center justify-around mt-2 mx-5">
    <div>
      <p class="mb-5 text-indigo-600 text-center text-lg font-bold">
        Numeric Valued Columns
      </p>
      <label
        v-for="(column, index) in numericColList"
        :key="index"
        class="flex items-center space-x-3 mb-3"
      >
        <input
          type="checkbox"
          name="checked-column"
          class="selectform form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
          @click="updateNumericSelection(index)"
        />
        <span class="text-gray-700 dark:text-white font-normal">
          {{ column.columnName }}
        </span>
      </label>
    </div>
    <div class="mx-5">
      <p class="mb-5 text-indigo-600 text-center text-lg font-bold">
        String Valued Columns
      </p>
      <label
        v-for="(column, index) in stringColList"
        :key="index"
        class="flex items-center space-x-3 mb-3"
      >
        <input
          type="checkbox"
          name="checked-column"
          class="selectform form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
          @click="updateStringSelection(index)"
        />
        <span class="text-gray-700 dark:text-white font-normal">
          {{ column.columnName }}
        </span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { DataStore } from "../../../../stores/DataStore/DataStore";
import { QueryStore } from "../../../../stores/QueryStore/QueryStore";
const dataStore = DataStore();
const queryStore = QueryStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const { queryList } = storeToRefs(queryStore);
const valueArr = Object.values(
  datatableList.value[selectedDatasetIndex.value].jsondata[0]
);
const datacolumns = Object.keys(
  datatableList.value[selectedDatasetIndex.value].jsondata[0]
);
console.log(valueArr);
for (let i = 0; i < valueArr.length; i++) {
  console.log();
}

function containsNumbers(str) {
  return /^[0-9]+./.test(str);
}

const numericColList = [];
const stringColList = [];
const len = valueArr.length;
for (let i = 0; i < len; i++) {
  if (containsNumbers(valueArr[i]) == true) {
    numericColList.push({
      columnName: datacolumns[i],
      selected: queryList.value[1].numericCheckedList[i],
    });
  } else {
    stringColList.push({
      columnName: datacolumns[i],
      selected: queryList.value[1].stringCheckedList[i],
    });
  }
}
console.log(numericColList);
console.log(stringColList);

function updateNumericSelection(index) {
  // some numerical queries like `BETWEEN` & '== != < > >= <=' logics
}

function updateStringSelection(index) {
  // some string queries like `IN` & `LIKE`
}
</script>
