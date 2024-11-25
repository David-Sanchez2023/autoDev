import type { z } from "zod";
import type { formCrearRegistrosSchema } from "../schemas";

// Plantillas
// import { SchemaListarRegistrosPlantilla } from "./schema.plantilla";
// import { RouterListarRegistrosPlantilla } from "./router.plantilla";
// import { ControllerListarRegistrosPlantilla } from "./controller.plantilla";
// import { QueryListarRegistrosPlantilla } from "./query.plantilla";

export function CrearRegistrosPlantilla(
  props: z.infer<typeof formCrearRegistrosSchema>,
) {
  return (
    <div className="space-y-4">
      {/* <SchemaListarRegistrosPlantilla {...props} />
      <RouterListarRegistrosPlantilla {...props} />
      <ControllerListarRegistrosPlantilla {...props} />
      <QueryListarRegistrosPlantilla {...props} /> */}
    </div>
  );
}
