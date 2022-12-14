import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { DataStore } from "../stores/DataStore/DataStore";
import { QueryStore } from "../stores/QueryStore/QueryStore";
import { EditorStore } from "../stores/EditorStore/EditorStore";
import { ResultStore } from "../stores/ResultStore/ResultStore";

export function refreshEditorCode() {
  const dataStore = DataStore();
  const queryStore = QueryStore();
  const editorStore = EditorStore();
  const resultStore = ResultStore();
  const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
  const { queryList } = storeToRefs(queryStore);
  const { editorCode } = storeToRefs(editorStore);
  const { resultData } = storeToRefs(resultStore);
  // update the querylist options to default
  editorCode.value = ``;
  queryList.value[0].checkedList = new Array(100).fill(false); // for SELECT queries
  queryList.value[0].checkedList[0] = false;
  queryList.value[1].numericCheckedList = new Array(100).fill(false); // for WHERE queries
  queryList.value[1].stringCheckedList = new Array(100).fill(false); // for WHERE queries
  queryList.value[2].orderQueryList = [];
  for (let i = 0; i < queryList.value.length; i++) {
    queryList.value[i].editorCode = ``;
  }
  resultData.value = [];
}


// function to detect the code in result page and update the result data
