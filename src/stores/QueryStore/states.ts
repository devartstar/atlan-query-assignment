export const states = {
  queryList: [
    {
      name: "SELECT",
      defn: "sql where usecase",
      options: ["IN", "BETWEEN", "LIKE"],
    },
    {
      name: "WHERE",
      defn: "sql where usecase",
      options: ["IN", "BETWEEN", "LIKE"],
    },
    {
      name: "ORDER-BY",
      defn: "sql order-by usecase",
      options: [],
    },
    {
      name: "LIMIT",
      defn: "sql limit usecase",
      options: [],
    },
    {
      name: "OFFSET",
      defn: "sql offset usecase",
      options: [],
    },
    {
      name: "GROUP-BY",
      defn: "sql group-by usecase",
      options: [],
    },
  ],
};

/*
SELECT 
  -> Select columns dropdown (generate the array and fill the dropdown element)

*/
