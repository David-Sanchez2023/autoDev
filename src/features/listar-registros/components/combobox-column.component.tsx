import { ComboboxCustom } from "./combobox-custom.component";
import { TABLES } from "@/utils";

export function ComboboxTable() {
  const data = TABLES.flatMap((table) =>
    table.columns.map((column) => ({
      label: column,
      value: column,
    })),
  );

  return (
    <ComboboxCustom
      data={data}
      name="columna"
      placeholder="Seleccione la columna"
      title="Columna"
    />
  );
}
