import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ingenieria-digital/medicatel-ui/components";

// Components
import { Form } from "@/components/ui/form";
import { ComboboxTable } from "@/features/listar-registros/components";
import { ComboboxMultipleField, LoaderSpinner } from "@/components";

// Plantilla
import { CrearRegistrosPlantilla } from "../plantillas-code";

// Types
import type { FormValuesCrearRegistrosType } from "../types";

// Schemas
import { formCrearRegistrosSchema } from "../schemas";

// Utils
import { defaultValuesCrearRegistros } from "../utils";
import { TABLES } from "@/utils";

export function FormCrearRegistros() {
  const form = useForm<FormValuesCrearRegistrosType>({
    resolver: zodResolver(formCrearRegistrosSchema),
    defaultValues: defaultValuesCrearRegistros,
  });

  const [data, setData] = useState<FormValuesCrearRegistrosType>();

  async function onSubmit(values: FormValuesCrearRegistrosType) {
    setData(values);
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-4"
        >
          <ComboboxTable />
          <ComboboxFieldColumnas />

          <div className="text-right">
            <Button
              disabled={form.formState.isSubmitting}
              className="w-full inline-flex items-center gap-4 my-7"
            >
              Generar código
              {form.formState.isSubmitting ? <LoaderSpinner /> : null}
            </Button>
          </div>
        </form>
      </Form>

      {data && <CrearRegistrosPlantilla {...data} />}
    </div>
  );
}

function ComboboxFieldColumnas() {
  const form = useFormContext();

  const tableName = form.watch("tabla");

  const selectColumnas = TABLES.find((item) => item.table === tableName.value);

  const data = selectColumnas?.columns.map((column) => {
    return {
      label: column,
      value: column,
    };
  });
  return (
    <ComboboxMultipleField
      name="columnas"
      placeholder="Seleccione las columnas"
      title="Columnas"
      data={data || []}
      disabled={!tableName?.value}
    />
  );
}
