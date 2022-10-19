import { defineStore } from "pinia";
import { actions } from "./actions";
import { getters } from "./getters";
import { states } from "./states";

export const EditorStore = defineStore({
  id: "EditorStore",
  state: () => states,
  getters,
  actions,
});
