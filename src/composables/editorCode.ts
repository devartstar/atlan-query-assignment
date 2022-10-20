import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { DataStore } from "../stores/DataStore/DataStore";
import { QueryStore } from "../stores/QueryStore/QueryStore";
import { EditorStore } from "../stores/EditorStore/EditorStore";

export function refreshEditorCode() {
  const dataStore = DataStore();
  const queryStore = QueryStore();
  const editorStore = EditorStore();
  const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
  const { queryList } = storeToRefs(queryStore);
  const { editorCode } = storeToRefs(editorStore);
  // update the querylist options to default
  editorCode.value = ``;
  queryList.value[0].checkedList = new Array(100).fill(false); // for SELECT queries
  queryList.value[0].checkedList[0] = true;
  queryList.value[1].numericCheckedList = new Array(100).fill(false); // for WHERE queries
  queryList.value[1].stringCheckedList = new Array(100).fill(false); // for WHERE queries
  queryList.value[2].orderQueryList = [];
}
