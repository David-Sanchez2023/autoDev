import { z } from "zod";

const comboboxSchema = z
  .object({
    value: z.string().min(1),
    label: z.string().min(1),
  })
  .refine((data) => data.value && data.label, {
    message: "Campo requerido",
  });

const joinFieldSchema = z.object({
  typeJoin: z.string().min(1, {
    message: "Debe seleccionar un join",
  }),
  columna1: comboboxSchema,
  columna2: comboboxSchema,
});

const optionalSchemas = z.object({
  addJoin: z.literal(false),
});

const itemsSchemas = z.object({
  addJoin: z.literal(true),
  itemJoin: z.array(joinFieldSchema).min(1),
});

export const formListarRegistrosSchema = z
  .object({
    tabla: comboboxSchema,
    columnas: z
      .array(
        z.object({
          value: z.string().min(1),
          label: z.string().min(1),
        })
      )
      .nonempty({ message: "Debe seleccionar al menos una columna" }),
  })
  .and(z.union([optionalSchemas, itemsSchemas]));
