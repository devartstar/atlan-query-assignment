<template>
  <h2 class="mb-5 mx-auto">Select Column Name to display</h2>
  <div class="flex items-center justify-center mt-2">
    <div>
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
import { EditorStore } from "../../../../stores/EditorStore/EditorStore";
const dataStore = DataStore();
const queryStore = QueryStore();
const editorStore = EditorStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const { queryList } = storeToRefs(queryStore);
const { editorCode } = storeToRefs(editorStore);
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
  columnList[index].selected = queryList.value[0].checkedList[index];

  if (index != 0) {
    queryList.value[0].checkedList[0] = false;
    comulnOptions[0].checked = false;
    columnList[0].selected = queryList.value[0].checkedList[0];
  }
  if (index == 0) {
    for (let i = 1; i < comulnOptions.length; i++) {
      queryList.value[0].checkedList[i] = false;
      comulnOptions[i].checked = false;
      columnList[i].selected = queryList.value[0].checkedList[i];
    }
  }
  console.log(columnList);
  // Update the editor
  updateEditorCode();
}

function updateEditorCode() {
  let appendCode = `SELECT `;
  for (let i = 0; i < columnList.length; i++) {
    if (columnList[i].selected == true) {
      appendCode += `${columnList[i].columnName}, `;
    }
  }
  appendCode += ` FROM ${
    datatableList.value[selectedDatasetIndex.value].title
  }`;
  queryList.value[0].editorCode = appendCode;
  console.log(queryList.value[0].editorCode);

  editorCode.value = ``;
  for (let i = 0; i < queryList.value.length; i++) {
    if (queryList.value[i].editorCode != "") {
      editorCode.value += `${queryList.value[i].editorCode} \n`;
    }
  }
  console.log(editorCode.value);
}
</script>
