import type { z } from "zod";

// Component
import { CodeBlock } from "@/components";

// Schemas
import type { formCrearRegistrosSchema } from "../schemas";

// Utils
import { capitalizarPrimeraLetra } from "@/utils";

export function RouterCrearRegistrosPlantilla(
  props: z.infer<typeof formCrearRegistrosSchema>,
) {
  const code = `
router.post(\`\${ruta}\`, Authenticate(PERMITS.${props.tabla.value}), async function (req, res) {
  const body = await create${capitalizarPrimeraLetra(props.tabla.value)}Schema.parseAsync(req.query);

  const response = await create${capitalizarPrimeraLetra(props.tabla.value)}(body);

  return res.status(response.statusCode).json(response);
});
`;

  return <CodeBlock code={code} title="Router" />;
}
