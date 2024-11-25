

export function generateQueryListarAll(name){

    const prepararConsilta = prepareQuery(name);


}

function prepareQuery(name){
    return `
    export async function ${name}Query(values)Query(
  values: z.infer&lt;typeof ${name}Schema&gt;
) {
  const [proveedores, [count]] = await Promise.all([
    getAllProveedoresQuery(values),
    getAllProveedoresCountQuery(values)
  ]);

  return {
    proveedores: proveedores,
    count: count?.count
  };
}
    `

}