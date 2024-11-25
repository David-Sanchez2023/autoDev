// TODO: Agregar el array para el sort

export function generateSchemaListarAll(name) {
    return `
    <pre><code class="javascript">
      export const ${name}Schema = z.object({
        limit: z.coerce.number().int().min(1).optional(),
        page: z.coerce.number().int().min(1).optional(),
        search: z.string().min(1).optional(),
        sortBy: sort({
          enum: ['nombre', 'tipoCobertura', 'countTiposCobertura']
        }).optional()
      });
    </code></pre>
    `;
  }