<template>
  <code-mirror
    v-model="editorCode"
    basic
    :dark="true"
    :lang="lang"
    :tab="true"
    class="max-h-96 text-lg"
    :wrap="true"
    :readonly="readOnly"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { sql } from "@codemirror/lang-sql";
import CodeMirror from "vue-codemirror6";

import { storeToRefs } from "pinia";
import { EditorStore } from "../../../stores/EditorStore/EditorStore";
import { QueryStore } from "../../../stores/QueryStore/QueryStore";
const editorStore = EditorStore();
const { editorCode } = storeToRefs(editorStore);
const queryStore = QueryStore();
const { queryList } = storeToRefs(queryStore);

const lang = sql();
const props = defineProps({
  readOnly: {
    type: Boolean,
    default: true,
  },
});
console.log("editor", props.readOnly);
</script>
