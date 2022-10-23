<template>
  <div id="exampletable" class="disptable"></div>
  <Pagination @change-size="updateSize($event)" />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { DataStore } from "../../../stores/DataStore/DataStore";
import Pagination from "../../Utils/Pagination.vue";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);
const props = defineProps({
  tableData: {
    type: [],
    required: true,
  },
  showPagination: {
    type: Boolean,
    default: false,
  },
});
const selectedSize = ref(10);
function updateSize(sz) {
  console.log(sz);
  selectedSize.value = sz;
  generateTable();
}
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
function generateTable() {
  var table = new Tabulator("#exampletable", {
    data: props.tableData,
    layout: "fitColumns",
    pagination: "local",
    paginationSize: selectedSize.value,
    columns: tableHeader,
  });
}
onMounted(() => {
  generateTable();
});
</script>

<style scoped>
.disptable {
  max-height: 60vh;
}
</style>
