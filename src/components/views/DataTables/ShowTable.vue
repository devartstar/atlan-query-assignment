<template>
  <div id="exampletable" class="disptable"></div>
  <Pagination @change-size="updateSize($event)" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Pagination from "../../Utils/Pagination.vue";

const props = defineProps({
  /** Data for the table to be displayed */
  tableData: {
    type: [],
    required: true,
  },
  /** If we need Pagenation */
  showPagination: {
    type: Boolean,
    default: false,
  },
});

const selectedSize = ref(10);
/**
 * Updates the Number of rows in the table
 * using emit property from child to change valued of selectedSize in parent
 * @param sz Number of rows to display in the table
 */
function updateSize(sz) {
  selectedSize.value = sz;
  generateTable();
}

/**
 * [Array of strings] dataHeaders list of keys of the Objejet
 * [Array of Objects] tableHeader headers for the tablr
 */
const dataHeaders = Object.keys(props.tableData[0]);
const headerLen = dataHeaders.length;
const tableHeader = [];
for (let i = 0; i < headerLen; i++) {
  tableHeader.push({
    title: dataHeaders[i],
    field: dataHeaders[i],
  });
}

/**
 * generates the table form the array of object using library called Tabulator
 */
function generateTable() {
  var table = new Tabulator("#exampletable", {
    data: props.tableData,
    layout: "fitColumns",
    pagination: "local",
    paginationSize: selectedSize.value,
    columns: tableHeader,
  });
}

// gerenate and display the table once page is mounted
onMounted(() => {
  generateTable();
});
</script>

<style scoped>
.disptable {
  max-height: 60vh;
}
</style>
