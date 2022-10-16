<template>
  <div class="flex bg-packed font-lexend dark:bg-gray-900">
    <Sidebar />
    <div class="flex-auto w-full overflow-auto h-screen" id="body-scroll">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
</script>

<style scoped></style>
