import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/views/Home.vue";
import Query from "/src/components/views/Query.vue";
import Result from "/src/components/views/Result.vue";
import Editor from "/src/components/views/Editor.vue";
import Datatable from "/src/components/views/DataTables/Datatable.vue";
import TableModal from "../components/views/DataTables/TableModal.vue";

const routes = [
  {
    path: "/",
    names: "Home",
    component: Home,
  },
  {
    path: "/query",
    names: "Query",
    component: Query,
  },
  {
    path: "/datatable",
    names: "DatatableList",
    component: Datatable,
    children: [
      {
        path: ":tableindex",
        names: "Datatable",
        component: TableModal,
      },
    ],
  },
  {
    path: "/editor",
    names: "Editor",
    component: Editor,
  },
  {
    path: "/result",
    names: "Result",
    component: Result,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
