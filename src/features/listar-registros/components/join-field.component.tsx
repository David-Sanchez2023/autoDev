import { useFieldArray, useFormContext } from "react-hook-form";

// Components
import { Button } from "@ingenieria-digital/medicatel-ui/components";
import { CheckBoxField } from "./checkbox-field.component";
import { ComboboxCustom } from "./combobox-custom.component";
import { CustomSelect } from "./select-custom.component";
import { Delete } from "@ingenieria-digital/medicatel-ui/icons";

// Utils
import { COLUMNS, TYPEJOIN } from "../utils";

export function JoinConsulta() {
  const form = useFormContext();

  const show = form.watch("addJoin");

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "itemJoin",
  });

  return (
    <div className="flex flex-col gap-4 transition-all">
      <CheckBoxField name="addJoin" text="Agregar Joins" />
      {show && (
        <>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-start  gap-2 ">
              <CustomSelect
                data={TYPEJOIN}
                name={`itemJoin.${index}.typeJoin`}
                placeholder="Seleccione el tipo de Join"
              />

              <ComboboxCustom
                data={COLUMNS}
                name={`itemJoin.${index}.columna1`}
                placeholder="Seleccione la columna 1"
              />

              <ComboboxCustom
                data={COLUMNS}
                name={`itemJoin.${index}.columna2`}
                placeholder="Seleccione la columna 2"
              />

              {fields.length > 1 && (
                <Button
                  className="bg-red-500 rounded-lg size-11 w-20 p-1 mt-2 "
                  size={"icon"}
                  type="button"
                  onClick={() => remove(index)}
                >
                  <Delete className="w-3/4" />
                </Button>
              )}
            </div>
          ))}

          <Button
            type="button"
            className="max-w-44"
            onClick={() =>
              append({
                typeJoin: "",
                columna1: { label: "", value: "" },
                columna2: { label: "", value: "" },
              })
            }
          >
            Agregar JOIN
          </Button>
        </>
      )}
    </div>
  );
}
