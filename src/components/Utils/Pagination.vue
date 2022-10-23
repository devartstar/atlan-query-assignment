<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <li
        v-for="size in rowsSize"
        :key="size"
        @click="$emit('change-size', size)"
      >
        <a
          href="#"
          class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >{{ size }}</a
        >
      </li>
      <!-- <li>
        <a
          href="#"
          aria-current="page"
          class="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >3</a
        >
      </li> -->
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["change-size"]);

const rowsSize = [5, 10, 20, 50, 100];
const selectedSize = ref(10);
</script>
