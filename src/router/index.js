import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/views/Home.vue";
import Query from "../components/views/QueryPage/Query.vue";
import QueryModal from "../components/views/QueryPage/QueryModal.vue";
import Result from "/src/components/views/Result.vue";
import Datatable from "/src/components/views/DataTables/Datatable.vue";
import TableModal from "../components/views/DataTables/TableModal.vue";
import ImportModal from "../components/views/DataTables/ImportModal.vue";
import Limit from "../components/views/QueryPage/QueryOptions/Limit.vue";
import Offset from "../components/views/QueryPage/QueryOptions/Offset.vue";
import Order from "../components/views/QueryPage/QueryOptions/Order.vue";
import Select from "../components/views/QueryPage/QueryOptions/Select.vue";
import Where from "../components/views/QueryPage/QueryOptions/Where.vue";
import Group from "../components/views/QueryPage/QueryOptions/Group.vue";

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
    children: [
      {
        path: ":tableindex",
        names: "Query Lists",
        component: QueryModal,
        props: true,
        children: [
          {
            path: "limit",
            names: "limit",
            component: Limit,
          },
          {
            path: "offset",
            names: "offset",
            component: Offset,
          },
          {
            path: "order-by",
            names: "order",
            component: Order,
          },
          {
            path: "select",
            names: "select",
            component: Select,
          },
          {
            path: "where",
            names: "where",
            component: Where,
          },
          {
            path: "group-by",
            names: "group-by",
            component: Group,
          },
        ],
      },
    ],
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
        props: true,
      },
    ],
  },
  {
    path: "/datatable/import",
    names: "Import File",
    component: ImportModal,
    props: true,
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
