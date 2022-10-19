<template>
  <div
    class="lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] border-2 border-indigo-600"
  >
    <code-mirror
      v-model="editorCode"
      basic
      :dark="true"
      :lang="lang"
      :tab="true"
      class="max-h-96"
      :readonly="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { sql } from "@codemirror/lang-sql";
import CodeMirror from "vue-codemirror6";

import { storeToRefs } from "pinia";
import { EditorStore } from "../../../stores/EditorStore/EditorStore";
const editorStore = EditorStore();
const { editorCode } = storeToRefs(editorStore);
const lang = sql();
</script>
