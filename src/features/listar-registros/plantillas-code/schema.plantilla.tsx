import type { z } from "zod";

// Component
import { CodeBlock } from "@/components";

// Schemas
import type { formListarRegistrosSchema } from "../schemas";

// Utils
import { capitalizarPrimeraLetra } from "@/utils";

export function SchemaListarRegistrosPlantilla(
  props: z.infer<typeof formListarRegistrosSchema>,
) {
  const columnas = props.columnas
    .map((itemColumna) => {
      const [_, columna] = itemColumna.value.split(".");
      return `'${columna}'`;
    })
    .join(", ");

  const code = `
    export const getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema = z.object({
        limit: z.coerce.number().int().min(1).optional(),
        page: z.coerce.number().int().min(1).optional(),
        search: z.string().min(1).optional(),
        sortBy: sort({
          enum: [${columnas}]
        }).optional()
      });
    `;

  return <CodeBlock code={code} title="Schema" />;
}
