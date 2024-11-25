import type { z } from "zod";

// Component
import { CodeBlock } from "@/components";

// Schemas
import type { formListarRegistrosSchema } from "../schemas";

// Utils
import { capitalizarPrimeraLetra } from "@/utils";

export function RouterListarRegistrosPlantilla(
  props: z.infer<typeof formListarRegistrosSchema>,
) {
  const code = `
router.get(\`\${ruta}\`, Authenticate(PERMITS.${props.tabla.value}), async function (req, res) {
  const querys = await getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema.parseAsync(req.query);

  const response = await getAll${capitalizarPrimeraLetra(props.tabla.value)}(querys);

  return res.status(response.statusCode).json(response);
});
`;

  return <CodeBlock code={code} title="Router" />;
}
