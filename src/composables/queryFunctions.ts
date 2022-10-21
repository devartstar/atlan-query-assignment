import { storeToRefs } from "pinia";
import { DataStore } from "../stores/DataStore/DataStore";
import { QueryStore } from "../stores/QueryStore/QueryStore";
import { EditorStore } from "../stores/EditorStore/EditorStore";
import { ResultStore } from "../stores/ResultStore/ResultStore";

export function generateResult() {
  const dataStore = DataStore();
  const queryStore = QueryStore();
  const editorStore = EditorStore();
  const resultStore = ResultStore();
  const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
  const { queryList } = storeToRefs(queryStore);
  const { editorCode } = storeToRefs(editorStore);
  const { resultData } = storeToRefs(resultStore);
  resultData.value = [];
  let len = datatableList.value[selectedDatasetIndex.value].jsondata.length;
  const datacolumns = Object.keys(
    datatableList.value[selectedDatasetIndex.value].jsondata[0]
  );
  let columns = [];
  if (queryList.value[0].checkedList[0] == true) {
    columns = datacolumns;
  } else {
    for (let i = 1; i < queryList.value[0].checkedList.length; i++) {
      if (queryList.value[0].checkedList[i] == true) {
        columns.push(datacolumns[i - 1]);
      }
    }
  }
  console.log(columns);
  for (
    let i = 0;
    i < datatableList.value[selectedDatasetIndex.value].jsondata.length;
    i++
  ) {
    let resObj = {};
    columns.forEach((column) => {
      resObj[column] =
        datatableList.value[selectedDatasetIndex.value].jsondata[i][column];
    });
    console.log(resObj);
    resultData.value.unshift(resObj);
  }
  console.log(resultData.value);
}