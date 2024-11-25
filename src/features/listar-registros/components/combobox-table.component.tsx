import { ComboboxCustom } from "./combobox-custom.component";
import { TABLES } from "@/utils";

export function ComboboxTable() {
  const data = TABLES.map((tabla) => {
    return {
      label: tabla.table,
      value: tabla.table,
    };
  });

  return (
    <ComboboxCustom
      data={data}
      name="tabla"
      placeholder="Seleecione la tabla"
      title="Tabla"
    />
  );
}
