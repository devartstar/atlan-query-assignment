<template>
  <div class="lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]">
    <code-mirror v-model="code" basic />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CodeMirror from "vue-codemirror6";
const code = ref("Some code");
</script>
