import { TABLES } from "@/utils";

export const defaultValuesListarRegistros = {
  tabla: {
    value: "",
    label: "",
  },
  columnas: [],
  addJoin: false,
  itemJoin: [
    {
      typeJoin: "",
      columna1: { label: "", value: "" },
      columna2: { label: "", value: "" },
    },
  ],
};

export const COLUMNS = TABLES.flatMap((table) =>
  table.columns.map((column) => ({
    label: column,
    value: column,
  }))
);

export const TYPEJOIN = [
  {
    label: "INNER JOIN",
    value: "innerJoin",
  },
  {
    label: "LEFT JOIN",
    value: "leftJoin",
  },
];
