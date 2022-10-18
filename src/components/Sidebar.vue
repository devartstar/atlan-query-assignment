<template>
  <!-- sidebar -->
  <div
    id="sidebar-scroll"
    class="flex-sidebar lg:flex-auto w-sidebar lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed"
  >
    <div class="resizer bg-indigo-600"></div>
    <nav class="sidebar bg-white dark:bg-gray-800">
      <!-- sidebar head -->
      <div class="sidebar-head p-4">
        <router-link to="/" exact>
          <h2
            class="text-2xl font-normal text-gray-800 dark:text-gray-500"
            translate="no"
            @click="sidebarUpdate(0)"
          >
            <img
              src="../assets/logo.png"
              alt="altanLogo"
              class="object-contain h-10 w-30"
            />
          </h2>
        </router-link>

        <button
          class="lg:hidden block float-right -mt-7"
          @click="sidebarToggle"
        >
          <img src="../assets/closeSidebar.svg" alt="close-sidebar" />
        </button>
      </div>
      <hr class="mt-3" />
      <!-- sidebar list -->
      <div class="sidebar-list p-4 mt-4">
        <div
          v-for="(option, index) in optionList"
          :key="index"
          class="item mt-5"
        >
          <router-link :to="getLink(index)">
            <div
              class="selbtn w-full relative inline-flex items-center pl-5 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-md hover:text-white group hover:bg-gray-50"
              @click="sidebarUpdate(index)"
            >
              <span
                class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-800 ease"
              ></span>
              <span
                class="hideEle absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease"
              >
                <img
                  src="../assets/button_arrow.svg"
                  alt="button-arrow"
                  class="w-5 h-5"
                />
              </span>
              <span class="text-xl relative"><Icon :icon="option.icon" /></span>
              <span class="relative ml-10 hideEle">{{ option.name }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";
import { sidebarToggle, sidebarUpdate } from "../composables/Sidebar";
import { storeToRefs } from "pinia";
import { DataStore } from "../stores/DataStore/DataStore";
const dataStore = DataStore();
const { datatableList, selectedDatasetIndex } = storeToRefs(dataStore);

const optionList = [
  {
    name: "Home",
    icon: "bxs:dashboard",
    linkto: "/",
  },
  {
    name: "Data",
    icon: "ant-design:database-filled",
    linkto: "/datatable",
  },
  {
    name: "Query",
    icon: "bxs:file-find",
    linkto: "/query",
  },
  {
    name: "Editor",
    icon: "bi:file-earmark-code-fill",
    linkto: "/editor",
  },
  {
    name: "Result",
    icon: "fluent:document-table-search-20-filled",
    linkto: "/result",
  },
];

onMounted(() => {
  const resizerEle = document.querySelector(".resizer");
  const sidebarEle = document.querySelector(".flex-sidebar");
  initResizerFn(resizerEle, sidebarEle);
});

function getLink(index) {
  // conditionally redirect to query route link depending upon the dataset selected or not
  if (index == 2 && selectedDatasetIndex.value != -1) {
    return optionList[index].linkto + "/" + index;
  } else {
    return optionList[index].linkto;
  }
}

function initResizerFn(resizer, sidebar) {
  // track current mouse position in x var
  var x, w;

  function mousedownHandler(e) {
    x = e.clientX;

    var sbWidth = window.getComputedStyle(sidebar).width;
    w = parseInt(sbWidth, 10);

    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseup", mouseupHandler);
  }

  function mousemoveHandler(e) {
    console.log(e);
    var dx = e.clientX - x;

    var cw = w + dx; // complete width

    if (cw > 100 && cw < 500) {
      sidebar.style.width = `${cw}px`;
    }
    console.log(cw);
    const arrowTransitionEle = document.querySelectorAll(".hideEle");
    if (cw < 200) {
      [...arrowTransitionEle].forEach(function (ele) {
        console.log(ele.style.visibility);
        ele.style.visibility = "hidden";
      });
    } else {
      [...arrowTransitionEle].forEach(function (ele) {
        console.log(ele.style.visibility);
        ele.style.visibility = "visible";
      });
    }
  }

  function mouseupHandler() {
    // remove event mousemove && mouseup
    document.removeEventListener("mouseup", mouseupHandler);
    document.removeEventListener("mousemove", mousemoveHandler);
  }

  resizer.addEventListener("mousedown", mousedownHandler);
}
</script>

<style>
.resizer {
  width: 3px;
  top: 0;
  right: 0;
  cursor: col-resize;
  height: 100%;
  position: absolute;
}
.active {
  background-color: black;
}
</style>
