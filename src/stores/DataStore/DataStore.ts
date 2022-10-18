import { defineStore } from "pinia";
import { actions } from "./actions";
import { getters } from "./getters";
import { states } from "./states";

export const DataStore = defineStore({
  id: "DataStore",
  state: () => states,
  getters,
  actions,
});
