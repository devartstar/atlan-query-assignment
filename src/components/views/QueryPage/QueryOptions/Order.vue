<template>
  <div class="flex flex-wrap justify-between">
    <div class="w-1/6">
      <p class="mb-5 text-indigo-600 text-center text-lg font-bold">Select</p>
      <div class="inline-flex flex-col">
        <a
          v-for="(column, index) in toAddColumn"
          :key="index"
          @click="addEle(index)"
          href="javascript:void(0)"
          class="border-primary text-black hover:bg-primary hover:border-primary inline-flex items-center justify-center border py-[10px] px-[12px] text-center text-base font-semibold text-white transition-all hover:text-white sm:py-3 sm:px-6"
        >
          {{ column }}
        </a>
      </div>
    </div>

    <div class="w-3/5">
      <p class="mb-5 text-indigo-600 text-center text-lg font-bold">
        Order Rules & Priority:-
      </p>
      <draggable
        tag="ul"
        :list="queryList[2].orderQueryList"
        class="flex flex-col pl-0 mb-0 rounded border-gray-300"
        handle=".handle"
        item-key="name"
        @change="updateEditorCode"
      >
        <template #item="{ element, index }">
          <li
            class="relative flex items-center justify-around py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline handle"
          >
            <span class="text">{{ element.name }} </span>
            <select
              v-model="element.orderRule"
              class="block w-1/2 py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              @change="updateEditorCode"
            >
              <option disabled>select order</option>
              <option>ASC</option>
              <option>DESC</option>
            </select>
            <img
              src="../../../../assets/close.png"
              class="w-3 h-3"
              @click="removeEle(index)"
            />
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import draggable from "vuedraggable";
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
const selected = ref("");
const datacolumns = Object.keys(
  datatableList.value[selectedDatasetIndex.value].jsondata[0]
);
const toAddColumn = ref([]);
onMounted(() => {
  // element snot present in orderQueryList
  // to be added to selected list
  // datacolumns
  // queryList.value[2].orderQueryList.value

  updateLists();
});

function updateLists() {
  let len = queryList.value[2].orderQueryList.length;
  let tempArr = [];
  for (let i = 0; i < len; i++) {
    tempArr.push(queryList.value[2].orderQueryList[i].name);
  }

  const tempSet = new Set(tempArr);

  // use filter() method
  // to filter only those elements
  // that need not to be deleted from the array
  toAddColumn.value = datacolumns.filter((ele) => {
    // return those elements not in the namesToDeleteSet
    return !tempSet.has(ele);
  });
  console.log(toAddColumn.value);
}

function removeEle(idx) {
  const ele = queryList.value[2].orderQueryList[idx];
  queryList.value[2].orderQueryList.splice(idx, 1);
  toAddColumn.value.push(ele.name);
  console.log(toAddColumn.value);
  console.log(queryList.value[2].orderQueryList);
  updateEditorCode();
}
function addEle(idx) {
  // do something
  queryList.value[2].orderQueryList.push({
    name: toAddColumn.value[idx],
    orderRule: "ASC",
  });
  toAddColumn.value.splice(idx, 1);
  updateLists();
  console.log(toAddColumn.value);
  console.log(queryList.value[2].orderQueryList);
  updateEditorCode();
}

function updateEditorCode() {
  console.log("HELLO FROM UPDATE CODE EDITOR");
  console.log(queryList.value[2].orderQueryList);
  let ascendingString = ``;
  let descendingString = ``;
  console.log(queryList.value[2].orderQueryList);
  let len = queryList.value[2].orderQueryList.length;
  for (let i = 0; i < len; i++) {
    if (queryList.value[2].orderQueryList[i].orderRule == "ASC") {
      ascendingString += `${queryList.value[2].orderQueryList[i].name}, `;
    } else {
      descendingString += `${queryList.value[2].orderQueryList[i].name}, `;
    }
  }
  console.log(ascendingString);
  console.log(descendingString);
  console.log(editorCode.value);
  let appendCode = ``;
  if (ascendingString.length > 0 || descendingString.length > 0) {
    appendCode += `WHERE `;
  }
  if (ascendingString.length > 0) {
    appendCode += `${ascendingString} ASC, \n      `;
  }
  if (descendingString.length > 0) {
    appendCode += `${descendingString} DESC `;
  }
  queryList.value[2].editorCode = appendCode;
  editorCode.value = ``;
  for (let i = 0; i < queryList.value.length; i++) {
    if (queryList.value[i].editorCode != "") {
      editorCode.value += `${queryList.value[i].editorCode} \n`;
    }
  }
}
</script>
<style scoped></style>
