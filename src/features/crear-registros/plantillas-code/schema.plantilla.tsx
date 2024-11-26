import type { z } from "zod";

// Component
import { CodeBlock } from "@/components";

// Schemas
import type { formCrearRegistrosSchema } from "../schemas";

// Utils
import { capitalizarPrimeraLetra } from "@/utils";

type SchemaCrearRegistrosProps = z.infer<typeof formCrearRegistrosSchema>;

export function SchemaCrearRegistrosPlantilla(
  props: SchemaCrearRegistrosProps,
) {
  const columnas = generarColumnas(props.columnas);

  const schemaCode = `
    export const create${capitalizarPrimeraLetra(props.tabla.value)}Schema = z.object({
      ${columnas},
      user: userSchema.optional()
    });
  `;

  return <CodeBlock code={schemaCode} title="Schema" />;
}

function generarColumnas(columnas: { value: string }[]): string {
  return columnas
    .map(({ value }) => {
      const partes = value.split(".");
      const columna = partes[1];

      if (!columna) {
        console.warn(`Formato inválido para la columna: ${value}`);
        return "// Columna inválida";
      }

      return esNumero(columna)
        ? `${columna}: z.coerce.number().int().min(1)`
        : `${columna}: z.string().min(1).max(255)`;
    })
    .join(", ");
}

function esNumero(texto: string) {
  const cadena = texto.toLowerCase();
  return (
    cadena.includes("fk") || cadena.includes("id") || cadena.includes("by")
  );
}
