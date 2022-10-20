import { defineStore } from "pinia";
import { actions } from "./actions";
import { getters } from "./getters";
import { states } from "./states";

export const ResultStore = defineStore({
  id: "ResultStore",
  state: () => states,
  getters,
  actions,
});
