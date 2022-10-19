export const states = {
  queryList: [
    {
      name: "SELECT",
      defn: "sql where usecase",
      checkedList: [],
      editorCode: "",
    },
    {
      name: "WHERE",
      defn: "sql where usecase",
      options: ["IN", "BETWEEN", "LIKE"],
      editorCode: "",
    },
    {
      name: "ORDER-BY",
      defn: "sql order-by usecase",
      options: [],
      editorCode: "",
    },
    {
      name: "LIMIT",
      defn: "sql limit usecase",
      options: [],
      editorCode: "",
    },
    {
      name: "OFFSET",
      defn: "sql offset usecase",
      options: [],
      editorCode: "",
    },
    {
      name: "GROUP-BY",
      defn: "sql group-by usecase",
      options: [],
      editorCode: "",
    },
  ],
};

/*
SELECT 
  -> Select columns dropdown (generate the array and fill the dropdown element)

*/
