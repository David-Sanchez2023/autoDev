import { useState } from "react";
import { Button } from "@ingenieria-digital/medicatel-ui/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import { Form } from "@/components/ui/form";
import { ComboboxMultipleField, LoaderSpinner } from "@/components";
import { ComboboxTable } from "./combobox-table.component";
import { JoinConsulta } from "./join-field.component";

// Plantilla
import { ListarRegistrosPlantilla } from "../plantillas-code";

// Schemas
import { formListarRegistrosSchema } from "../schemas";

// Types
import type { FormValuesListarRegistrosType } from "../types/listar-registros.type";

// Utils
import { defaultValuesListarRegistros } from "../utils";
import { TABLES } from "@/utils";

export function FormListarRegistros() {
  const form = useForm<FormValuesListarRegistrosType>({
    resolver: zodResolver(formListarRegistrosSchema),
    defaultValues: defaultValuesListarRegistros,
  });

  const [data, setData] = useState<FormValuesListarRegistrosType>();

  async function onSubmit(values: FormValuesListarRegistrosType) {
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
          <ComboboxFileldColumn />
          <ComboboxTable />
          <JoinConsulta />
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

      {data && <ListarRegistrosPlantilla {...data} />}
    </div>
  );
}

function ComboboxFileldColumn() {
  const data = TABLES.flatMap((table) =>
    table.columns.map((column) => ({
      label: column,
      value: column,
    })),
  );

  return (
    <ComboboxMultipleField
      name="columnas"
      placeholder="Seleccione las columnas"
      title="Columnas"
      data={data || []}
    />
  );
}
