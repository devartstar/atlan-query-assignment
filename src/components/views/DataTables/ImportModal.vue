<template>
  <div class="m-20">
    <div class="md:grid md:grid-cols-2 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="tablename"
                    class="block text-md font-medium text-gray-700"
                    >Table Name</label
                  >
                  <input
                    type="text"
                    name="tablename"
                    v-model="inputData.title"
                    id="tablename"
                    class="block w-full p-1 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="... Table"
                  />
                </div>
              </div>

              <div>
                <label
                  for="tabledesc"
                  class="block text-md font-medium text-gray-700"
                  >Table Description</label
                >
                <div class="mt-1">
                  <textarea
                    id="tabledesc"
                    v-model="inputData.description"
                    name="tabledesc"
                    rows="6"
                    class="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="This Table stores the data for ..."
                  ></textarea>
                </div>
              </div>

              <div class="flex justify-center">
                <div class="flex-1 m-5">
                  <label class="block text-md font-medium text-gray-700"
                    >Data table file</label
                  >
                  <div
                    class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                  >
                    <div class="space-y-1 text-center">
                      <img
                        src="../../../assets/upload_database.svg"
                        class="h-12 w-12 m-auto"
                      />
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="csvupload"
                          class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="csvupload"
                            name="csvupload"
                            type="file"
                            class="sr-only"
                            target=".csv"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">CSV file</p>
                    </div>
                  </div>
                </div>
                <div class="flex-1 m-5">
                  <label class="block text-md font-medium text-gray-700"
                    >Table Cover Pic</label
                  >
                  <div
                    class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                  >
                    <div class="space-y-1 text-center">
                      <img
                        src="../../../assets/upload_image.svg"
                        class="h-12 w-12 m-auto"
                      />
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="picupload"
                          class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="picupload"
                            name="picupload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <router-link to="/datatable">
              <div class="bg-gray-50 px-4 py-5 text-right sm:px-6">
                <Button buttonText="Add Database" @click="updateTableList" />
              </div>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import Button from "../../Utils/Button.vue";

// Initializing DataStore
import { DataStore } from "../../../stores/DataStore/DataStore";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);

// ref variable
const inputData = ref(() => {});

/**
 *  Object containg information to the input form
 */
inputData.value = {
  image: "",
  title: "",
  description: "",
  jsondata: [{}],
};

/**
 * Parsing the imported file to desired array of object form using papaparse library
 */
function updateTableList() {
  // add another item to the tables store
  // reditrect to /tabledata/{new tableindex}
  const uploadfile = document.getElementById("csvupload");
  Papa.parse(uploadfile.files[0], {
    download: true,
    header: true,
    skipEmptyLines: true,
    // step: function (row) {
    //   // some update for each row
    //   // for big tables renser only some rows as preview
    //   console.log("Row:", row.data);
    // },
    complete: function (results) {
      inputData.value.jsondata = results.data;
      datatableList.value.push(inputData.value);
      // localStorage.tables = JSON.stringify(datatableList.value);
    },
  });
}
</script>

<style scoped></style>
