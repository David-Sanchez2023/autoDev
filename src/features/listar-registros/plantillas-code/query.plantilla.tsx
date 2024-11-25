import type { z } from "zod";

// Components
import { CodeBlock } from "@/components";

// Schema
import type { formListarRegistrosSchema } from "../schemas";

// Utils
import { capitalizarPrimeraLetra } from "@/utils";

export function QueryListarRegistrosPlantilla(
  props: z.infer<typeof formListarRegistrosSchema>,
) {
  const paso1 = paso1Function(props);
  const paso2 = paso2Function(props);
  const paso3 = paso3Function(props);
  const paso4 = paso4Function(props);
  const paso5 = paso5Function(props);
  const paso6 = paso6Function(props);
  const paso7 = paso7Function(props);
  const paso8 = paso8Function(props);

  const code = `
  ${paso1}
  ${paso2}
  ${paso3}
  ${paso4}
  ${props.addJoin ? paso5 : ""}
  ${paso6}
  ${paso7}
  ${paso8}
  `;

  return <CodeBlock code={code} title="Querys" />;
}

function paso1Function(props: z.infer<typeof formListarRegistrosSchema>) {
  return `
    export async function get${capitalizarPrimeraLetra(props.tabla.value)}Query(
      values: z.infer<typeof getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema>
    ) {
      const [${props.tabla.value}, [count]] = await Promise.all([
        getAll${capitalizarPrimeraLetra(props.tabla.value)}Query(values),
        getAll${capitalizarPrimeraLetra(props.tabla.value)}CountQuery(values)
      ]);

      return {
        ${props.tabla.value},
        count: count?.count
      };
    }
  `;
}

function paso2Function(props: z.infer<typeof formListarRegistrosSchema>) {
  return `
  async function getAll${capitalizarPrimeraLetra(props.tabla.value)}CountQuery(
    values: z.infer<typeof getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema>
  ) {
    const query = db
      .select({
        count: countDistinct(${props.tabla.value}.id),
      })
      .from(${props.tabla.value})
      .$dynamic();
  
    return buildFilteredQuery(query, values);
  }
    `;
}

function paso3Function(props: z.infer<typeof formListarRegistrosSchema>) {
  return `
    export async function getAll${capitalizarPrimeraLetra(props.tabla.value)}Query(
     values: z.infer<typeof getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema>
    ) {
    const query = db
        .select({
        ${props.columnas.map((itemColumna) => {
          const [_, columna] = itemColumna.value.split(".");
          return `${columna}: ${itemColumna.value}`;
        })}
        })
        .from(${props.tabla.value})
        .$dynamic();

        const query${capitalizarPrimeraLetra(props.tabla.value)} = buildFilteredQuery(query, values);

        query${capitalizarPrimeraLetra(props.tabla.value)}.groupBy(${props.tabla.value}.id);

        return withPagination(query${capitalizarPrimeraLetra(props.tabla.value)}, values.page, values.limit);
    }
    `;
}

function paso4Function(props: z.infer<typeof formListarRegistrosSchema>) {
  return `
    function buildFilteredQuery<T extends MySqlSelect>(
        query: T,
        values: z.infer<typeof getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema>
    ) {
    
        const queryAddJoin = ${props.addJoin ? "addJoinsTables(query)" : "query"};

        const queryWithSort = addSortByQuery(queryAddJoin, values.sortBy);

        return addWhereAll${capitalizarPrimeraLetra(props.tabla.value)}(queryWithSort, values);
    }
    `;
}

function paso5Function(props: z.infer<typeof formListarRegistrosSchema>) {
  let isJoin: string[] | null = null;

  if (props.addJoin === true) {
    isJoin = props.itemJoin.map((join) => {
      const [tabla, _] = join.columna1.value.split(".");

      return `.${join.typeJoin}(
          ${tabla},
          and(
            eq(${join.columna1.value}, ${join.columna2.value}),
            isNull(${tabla}.deletedAt)
          )
        )`;
    });
  }

  return `
      function addJoinsTables<T extends MySqlSelect>(query: T) {
        return query
        ${isJoin ? isJoin.join("\n") : ""}
        ;
      }
    `;
}

function paso6Function(props: z.infer<typeof formListarRegistrosSchema>) {
  return `
    function addSortByQuery<T extends MySqlSelect>(
  queryBuilder: T,
  querySort: z.infer<typeof getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema>['sortBy']
) {
  if (!querySort) return queryBuilder;

  const column = getColumnSortBy(querySort.column);

  const ordering = querySort.orderBy === 'asc' ? asc(column) : desc(column);

  return queryBuilder.orderBy(isNull(column), ordering);
}
    `;
}

function paso7Function(props: z.infer<typeof formListarRegistrosSchema>) {
  const validSort = props.columnas.map((itemColumna) => {
    const [tabla, columna] = itemColumna.value.split(".");

    if (tabla !== props.tabla.value) {
      return `if (columnSort === '${columna}') {
                    return ${itemColumna.value};
              }`;
    }
  });

  return `function getColumnSortBy(
            columnSort: Required<z.infer<typeof getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema>>['sortBy']['column']
          ) {
                ${validSort.join("\n")}
  
                return ${props.tabla.value}[columnSort];
            }`;
}

function paso8Function(props: z.infer<typeof formListarRegistrosSchema>) {
  return `
function addWhereAll${capitalizarPrimeraLetra(props.tabla.value)}<T extends MySqlSelect>(
  queryBuilder: T,
  values: z.infer<typeof getAll${capitalizarPrimeraLetra(props.tabla.value)}Schema>
) {
  const searchFilter: SQL[] = [];

  if (values.search) {
    const texto = \`\%\${values.search.trim()}\%\`;
    searchFilter.push(
        ${props.columnas.map((column) => `like(${column.value}, texto)`)}
    );
  }

  return queryBuilder.where(and(or(...searchFilter), isNull(proveedores.deletedAt)));
}

`;
}
