import type { z } from "zod";
import type { formCrearRegistrosSchema } from "../schemas";

// Plantillas
import { SchemaCrearRegistrosPlantilla } from "./schema.plantilla";
import { RouterCrearRegistrosPlantilla } from "./router.planilla";
import { ControllerCrearRegistrosPlantilla } from "./controller.plantilla";
import { QueryCrearRegistrosPlantilla } from "./query.plantilla";

export function CrearRegistrosPlantilla(
  props: z.infer<typeof formCrearRegistrosSchema>,
) {
  return (
    <div className="space-y-4">
      <SchemaCrearRegistrosPlantilla {...props} />
      <RouterCrearRegistrosPlantilla {...props} />
      <ControllerCrearRegistrosPlantilla {...props} />
      <QueryCrearRegistrosPlantilla {...props} />
    </div>
  );
}
