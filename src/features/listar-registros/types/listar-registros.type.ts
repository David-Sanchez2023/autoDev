import type { z } from "zod";
import type { formListarRegistrosSchema } from "../schemas";

export type FormValuesListarRegistrosType = z.infer<
  typeof formListarRegistrosSchema
>;
