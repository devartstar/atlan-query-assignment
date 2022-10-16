<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white dark:bg-gray-800">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <router-link to="/" exact>
        <h2
          class="text-2xl font-normal text-gray-800 dark:text-gray-500"
          translate="no"
        >
          <img
            src="../assets/logo.png"
            alt="altanLogo"
            class="object-contain h-10 w-30"
          />
        </h2>
      </router-link>

      <button class="lg:hidden block float-right -mt-7" @click="sidebarToggle">
        <img src="../assets/closeSidebar.svg" alt="close-sidebar" />
      </button>
    </div>
    <hr class="mt-3" />
    <!-- sidebar list -->
    <div class="sidebar-list p-4 mt-4">
      <div v-for="option in optionList" :key="option.name" class="item mt-5">
        <router-link :to="option.linkto">
          <div
            class="w-full relative inline-flex items-center pl-5 pr-20 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-md hover:text-white group hover:bg-gray-50"
          >
            <span
              class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-800 ease"
            ></span>
            <span
              class="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-full group-hover:translate-x-0 ease"
            >
              <img
                src="../assets/button_arrow.svg"
                alt="button-arrow"
                class="w-5 h-5"
              />
            </span>
            <span class="mr-10 text-xl"><Icon :icon="option.icon" /></span>
            <span class="relative">{{ option.name }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const optionList = [
  {
    name: "Home",
    icon: "bxs:dashboard",
    linkto: "/",
  },
  {
    name: "Datas",
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
    name: "Results",
    icon: "fluent:document-table-search-20-filled",
    linkto: "/result",
  },
];

function sidebarToggle() {
  document.querySelector(".flex-sidebar").classList.add("hidden");
}
</script>
