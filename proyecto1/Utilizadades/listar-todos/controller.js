export function generateControllerListarAll(name) { 
  return `
    <pre><code class="javascript">
      export async function ${name}(values: z.infer&lt;typeof ${name}Schema&gt;) {
        const { count, infoData } = await ${name}Query(values);

        const pagination = generatePagination({
          limit: values.limit,
          page: values.page,
          total: count
        });

        return new ApiResponse({
          statusCode: 200,
          title: '${name} listado',
          message: '${name} listado',
          data: { pagination, infoData }
        });
      }
    </code></pre>
  `;
}

