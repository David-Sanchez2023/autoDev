import type { z } from "zod";

// Component
import { CodeBlock } from "@/components";

// Schemas
import type { formListarRegistrosSchema } from "../schemas";

// Utils
import { capitalizarPrimeraLetra } from "@/utils";

export function ControllerListarRegistrosPlantilla(
  props: z.infer<typeof formListarRegistrosSchema>,
) {
  const code = `
export async function getAll${capitalizarPrimeraLetra(props.tabla.value)}(values: z.infer<typeof getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema>) {
  const { count, ${props.tabla.value} } = await get${capitalizarPrimeraLetra(props.tabla.value)}Query(values);

  const pagination = generatePagination({
    limit: values.limit,
    page: values.page,
    total: count
  });

  return new ApiResponse({
    statusCode: 200,
    title: '${props.tabla.value} listados',
    message: '${props.tabla.value} listados con éxito',
    data: { pagination, ${props.tabla.value} }
  });
}
`;

  return <CodeBlock code={code} title="Controller" />;
}
