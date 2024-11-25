import { z } from "zod";

const comboboxSchema = z
  .object({
    value: z.string().min(1),
    label: z.string().min(1),
  })
  .refine((data) => data.value && data.label, {
    message: "Campo requerido",
  });

export const formCrearRegistrosSchema = z.object({
  tabla: comboboxSchema,
  columnas: z
    .array(
      z.object({
        value: z.string().min(1),
        label: z.string().min(1),
      })
    )
    .nonempty({ message: "Debe seleccionar al menos una columna" }),
});
