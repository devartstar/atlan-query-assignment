import { defineStore } from "pinia";
import { actions } from "./actions";
import { getters } from "./getters";
import { states } from "./states";

export const QueryStore = defineStore({
  id: "QueryStore",
  state: () => states,
  getters,
  actions,
});
