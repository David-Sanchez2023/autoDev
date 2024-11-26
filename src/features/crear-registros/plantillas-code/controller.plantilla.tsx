import type { z } from "zod";

// Component
import { CodeBlock } from "@/components";

// Schemas
import type { formCrearRegistrosSchema } from "../schemas";

// Utils
import { capitalizarPrimeraLetra } from "@/utils";

export function ControllerCrearRegistrosPlantilla(
  props: z.infer<typeof formCrearRegistrosSchema>,
) {
  const code = `
export async function create${capitalizarPrimeraLetra(props.tabla.value)}(body: z.infer<typeof create${capitalizarPrimeraLetra(props.tabla.value)}Schema>) {

  await create${capitalizarPrimeraLetra(props.tabla.value)}Query(body);

  return new ApiResponse({
    statusCode: 200,
    title: '${capitalizarPrimeraLetra(props.tabla.value)} creado',
    message: '${capitalizarPrimeraLetra(props.tabla.value)} creado con éxito'
  });
}
`;

  return <CodeBlock code={code} title="Controller" />;
}
