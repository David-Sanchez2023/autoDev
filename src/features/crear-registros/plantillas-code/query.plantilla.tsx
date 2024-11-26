import type { z } from "zod";

// Component
import { CodeBlock } from "@/components";

// Schemas
import type { formCrearRegistrosSchema } from "../schemas";

// Utils
import { capitalizarPrimeraLetra } from "@/utils";

export function QueryCrearRegistrosPlantilla(
  props: z.infer<typeof formCrearRegistrosSchema>,
) {
  const code = `
export async function create${capitalizarPrimeraLetra(props.tabla.value)}Query(body: z.infer<typeof create${capitalizarPrimeraLetra(props.tabla.value)}Schema>) {
  
  const { user, ...newBody } = body;

  return db
    .insert(bancos)
    .values({
      ...newBody,
      createdBy: body.user?.idUsuario,
      createdAt: getCurrentDateFormat()
    });
}
`;

  return <CodeBlock code={code} title="Controller" />;
}
