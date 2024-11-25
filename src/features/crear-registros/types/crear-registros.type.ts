import type { z } from "zod";
import type { formCrearRegistrosSchema } from "../schemas";

export type FormValuesCrearRegistrosType = z.infer<
  typeof formCrearRegistrosSchema
>;
