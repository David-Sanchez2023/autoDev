import { useState } from "react";
import { Button, Textarea } from "@ingenieria-digital/medicatel-ui/components";

// Components
import { CodeBlock } from "@/components";

export function SchemastoArray() {
  const [codeInput, setCodeInput] = useState("");
  const [output, setOutput] = useState("");

  // Función manejadora del clic en el botón
  function handleGenerateClick() {
    if (codeInput.trim()) {
      const codeBlocks = codeInput.trim().split(/\n\s*\n/);

      const allColumns = codeBlocks.map((block) => {
        const columnNames = generateColumnNamesFromCode(block);
        const tableMatch = block.match(/'(\w+)'/);
        const tableName = tableMatch ? toCamelCase(tableMatch[1]) : "tabla";

        return {
          table: tableName,
          columns: columnNames,
        };
      });

      setOutput(
        `export const TABLES = ${JSON.stringify(allColumns, null, 2)} as const;`,
      );
    } else {
      setOutput("Por favor, pega el código de las tablas.");
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Esciba el Schema de la BD"
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        rows={20}
        cols={80}
      />
      <Button onClick={handleGenerateClick}>Convertir Schema to Array</Button>

      {output ? <CodeBlock code={output} title="Array" /> : ""}
    </div>
  );
}

// Función para generar nombres de columnas en el formato "tabla.columna"
function generateColumnNamesFromCode(code: string): string[] {
  const regex = /(\w+)\s*:\s*(bigint|varchar|int|timestamp)/g;
  const matches = [...code.matchAll(regex)];

  const tableNameMatch = code.match(/'(\w+)'/);
  const tableName = tableNameMatch ? toCamelCase(tableNameMatch[1]) : "tabla";

  return matches.map((match) => `${tableName}.${match[1]}`);
}

// Función para convertir un nombre de tabla en snake_case a camelCase
function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
