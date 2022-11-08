<template>
  <code-mirror
    v-model="editorCode"
    basic
    :dark="true"
    :lang="lang"
    :tab="true"
    class="text-lg h-full [&>*]:h-full"
    :wrap="true"
    :readonly="readOnly"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { sql } from "@codemirror/lang-sql";
import CodeMirror from "vue-codemirror6";

// Initializing EditorStore
import { EditorStore } from "../../../stores/EditorStore/EditorStore";
const editorStore = EditorStore();
const { editorCode } = storeToRefs(editorStore);

const lang = sql();
const props = defineProps({
  /** We take in as prop for the editor be be editable or read-olny */
  readOnly: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.cm-editor {
  height: 100%;
}
</style>
