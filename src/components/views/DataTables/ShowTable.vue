<template>
  <div id="exampletable"></div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { DataStore } from "../../../stores/DataStore/DataStore";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const props = defineProps({
  tableData: {
    type: [],
    required: true,
  },
});
console.log(props.tableData);
const dataHeaders = Object.keys(props.tableData[0]);
const headerLen = dataHeaders.length;
const tableHeader = [];
for (let i = 0; i < headerLen; i++) {
  tableHeader.push({
    title: dataHeaders[i],
    field: dataHeaders[i],
  });
}
console.log(tableHeader);
onMounted(() => {
  var table = new Tabulator("#exampletable", {
    height: 405,
    data: props.tableData,
    layout: "fitColumns",
    columns: tableHeader,
  });
});
</script>
