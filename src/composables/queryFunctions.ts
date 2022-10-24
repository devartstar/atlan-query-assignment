import { storeToRefs } from "pinia";
import { DataStore } from "../stores/DataStore/DataStore";
import { QueryStore } from "../stores/QueryStore/QueryStore";
import { ResultStore } from "../stores/ResultStore/ResultStore";

/**
 * returns result of array is displayed in results page
 * @returns the array of object
 */
export function generateResult() {
  //   console.log("HERE MIGHT STUCK FOR BIG DATA (100,000 Rows does work)- IMPROVE LOGIC  - ");
  selectResult();
  sortResult();
}

/**
 * @returns array containing only selected rows
 */
export function selectResult() {
  const dataStore = DataStore();
  const queryStore = QueryStore();
  const resultStore = ResultStore();
  const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
  const { queryList } = storeToRefs(queryStore);
  const { resultData } = storeToRefs(resultStore);
  if (selectedDatasetIndex.value == -1) return;
  resultData.value = [];
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

  datatableList.value[selectedDatasetIndex.value].jsondata.forEach((ele) => {
    let resObj = {};
    columns.forEach((column) => {
      resObj[column] = ele[column];
    });
    console.log(resObj);
    resultData.value.push(resObj);
  });
}

/**
 * @returns sorted array of the selected rows
 */
export function sortResult() {
  const dataStore = DataStore();
  const queryStore = QueryStore();
  const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
  const { queryList } = storeToRefs(queryStore);

  // logic ompares in order as string
  // Todo: Modification
  // Seperate Numberic and Non Numeric and convert to numeric & sort accordingly
  for (let i = 0; i < queryList.value[2].orderQueryList?.length; i++) {
    let nm = queryList.value[2].orderQueryList[i].name;
    let or = queryList.value[2].orderQueryList[i].orderRule;
    if (i > 0) {
      datatableList.value[selectedDatasetIndex.value].jsondata.sort((a, b) => {
        if (a[nm] != b[nm]) return 0;
        if (or == "ASC") {
          if (a[nm] > b[nm]) return 1;
          else return -1;
        }
        if (or == "DESC") {
          if (a[nm] < b[nm]) return 1;
          else return -1;
        }
      });
    }
    if (i == 0) {
      datatableList.value[selectedDatasetIndex.value].jsondata.sort((a, b) => {
        if (or == "ASC") {
          if (a[nm] > b[nm]) return 1;
          else return -1;
        }
        if (or == "DESC") {
          if (a[nm] < b[nm]) return 1;
          else return -1;
        }
      });
    }
  }
}
