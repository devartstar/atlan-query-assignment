<template>
  <p class="mb-5 text-indigo-600 text-center text-lg font-bold">
    Select Column Name to display
  </p>
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

// initializing DataStore
import { DataStore } from "../../../../stores/DataStore/DataStore";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);

// initializing QueryStore
import { QueryStore } from "../../../../stores/QueryStore/QueryStore";
const queryStore = QueryStore();
const { queryList } = storeToRefs(queryStore);

// initializing EditorStore
import { EditorStore } from "../../../../stores/EditorStore/EditorStore";
const editorStore = EditorStore();
const { editorCode } = storeToRefs(editorStore);

/**
 * it stores the array of keys (the columns)
 */
const datacolumns = Object.keys(
  datatableList.value[selectedDatasetIndex.value].jsondata[0]
);

/**
 * array of object
 * the list of column names along with boolean representing selected or not
 */
const columnList = [
  {
    columnName: "*",
    selected: false,
  },
];
const len = datacolumns.length;
/** creating the array of object */
for (let i = 1; i <= len; i++) {
  columnList.push({
    columnName: datacolumns[i - 1],
    selected: queryList.value[0].checkedList[i],
  });
}

/**
 * updating the selections from the previous selections
 * so its stores on switing tabs in sidebar
 */
onMounted(() => {
  const comulnOptions = document.querySelectorAll(".selectform");
  [...comulnOptions].forEach(function (ele, ind) {
    ele.checked = queryList.value[0].checkedList[ind];
  });
});

/**
 * updat the data in columnList depending on the checkbox clicked
 * @param index (the index to the column selected)
 */
function updateSelection(index) {
  const comulnOptions = document.querySelectorAll(".selectform");
  queryList.value[0].checkedList[index] =
    !queryList.value[0].checkedList[index];
  columnList[index].selected = queryList.value[0].checkedList[index];

  /** if any other column is selected unselect * */
  if (index != 0) {
    queryList.value[0].checkedList[0] = false;
    comulnOptions[0].checked = false;
    columnList[0].selected = queryList.value[0].checkedList[0];
  }
  /** if * selected unselct all other columns */
  if (index == 0) {
    for (let i = 1; i < comulnOptions.length; i++) {
      queryList.value[0].checkedList[i] = false;
      comulnOptions[i].checked = false;
      columnList[i].selected = queryList.value[0].checkedList[i];
    }
  }
  // Update the editor
  updateEditorCode();
}

/**
 * update the editor code depending on the selections
 */
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

  editorCode.value = ``;
  for (let i = 0; i < queryList.value.length; i++) {
    if (queryList.value[i].editorCode != "") {
      editorCode.value += `${queryList.value[i].editorCode} \n`;
    }
  }
}
</script>
