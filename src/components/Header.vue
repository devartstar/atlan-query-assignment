<template>
  <header class="bg-white dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700">
    <div class="wrap-header flex items-center justify-between flex-wrap">
      <div class="flex flex-no-shrink items-center">
        <button
          class="text-gray-500 lg:hidden ml-3 block"
          @click="sidebarToggle"
        >
          <img src="../assets/hamburger.svg" alt="toggle-sidebar" />
        </button>
        <h2
          class="text-md text-indigo-800 ml-3 lg:block hidden px-5 p-2 pr-0 rounded-md"
        >
          <img
            src="../assets/atlan_logo.png"
            alt="altan_Logo"
            class="object-contain h-12 w-12"
          />
        </h2>
        <h2
          class="text-md text-indigo-800 ml-3 lg:block hidden px-5 p-2 rounded-md bg-indigo-200"
        >
          Atlan Assignment
        </h2>
      </div>

      <div class="mr-5 flex">
        <ThemeToggleBtn />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggleBtn from "./ThemeToggleBtn.vue";
import { ref } from "@vue/reactivity";

const menu = ref(false);

function menuToggle() {
  menu.value = !menu.value;
}
function menuToggleBlur() {
  menu.value = false;
}
function sidebarToggle() {
  document.querySelector(".flex-sidebar").classList.remove("hidden");
}
</script>
