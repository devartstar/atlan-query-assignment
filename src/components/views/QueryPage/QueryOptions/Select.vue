<template>
  <div class="flex items-center justify-center mt-2">
    <div>
      <h2 class="mb-2">Select Column Name to display</h2>
      <label
        v-for="(column, index) in columnList"
        :key="index"
        class="flex items-center space-x-3 mb-3"
      >
        <input
          type="checkbox"
          name="checked-column"
          class="selectform form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
          @click="updateSelection(index)"
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
import { onMounted, ref } from "vue";
import { DataStore } from "../../../../stores/DataStore/DataStore";
import { QueryStore } from "../../../../stores/QueryStore/QueryStore";
const dataStore = DataStore();
const queryStore = QueryStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const { queryList } = storeToRefs(queryStore);

const datacolumns = Object.keys(
  datatableList.value[selectedDatasetIndex.value].jsondata[0]
);

const columnList = [
  {
    columnName: "*",
    selected: true,
  },
];
const len = datacolumns.length;
for (let i = 1; i <= len; i++) {
  columnList.push({
    columnName: datacolumns[i - 1],
    selected: queryList.value[0].checkedList[i],
  });
}

onMounted(() => {
  const comulnOptions = document.querySelectorAll(".selectform");
  [...comulnOptions].forEach(function (ele, ind) {
    ele.checked = queryList.value[0].checkedList[ind];
  });
});

function updateSelection(index) {
  const comulnOptions = document.querySelectorAll(".selectform");
  queryList.value[0].checkedList[index] =
    !queryList.value[0].checkedList[index];

  if (index != 0) {
    queryList.value[0].checkedList[0] = false;
    comulnOptions[0].checked = false;
  }
  if (index == 0) {
    for (let i = 1; i < queryList.value[0].checkedList.length; i++) {
      queryList.value[0].checkedList[i] = false;
      comulnOptions[i].checked = false;
    }
  }

  // Update the editor
}
</script>
