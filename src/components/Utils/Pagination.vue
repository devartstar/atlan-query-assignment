<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <li v-for="size in rowsSize" @click="updateSelection(size)">
        <a
          class="pages py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          :class="
            size > props.tableSize * 2
              ? 'cursor-not-allowed bg-gray-200'
              : 'cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'
          "
          >{{ size }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const emit = defineEmits(["change-size"]);
const props = defineProps({
  /** Data for the table to be displayed */
  tableSize: {
    type: Number,
    default: 100,
  },
});

const rowsSize = [5, 10, 20, 50, 100, 500];

const selectedSize = ref(10);

function updateSelection(size) {
  if (size > props.tableSize * 2) return;
  emit("change-size", size);
  const page = document.querySelectorAll(".pages");
  [...page].forEach(function (ele) {
    if (parseInt(ele.innerHTML) > props.tableSize * 2) return;

    if (parseInt(ele.innerHTML) == size) {
      if (size > props.tableSize * 2) return;
      ele.style.backgroundColor = "#4F46E5";
      ele.style.color = "white";
    } else {
      ele.style.backgroundColor = "white";
      ele.style.color = "#6B7280";
    }
  });
}
</script>
