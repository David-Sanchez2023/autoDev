// Listar

import { generateCodeListarAll } from './listar-todos/index.js'
import { tablas } from './listar-todos/tablas.js';

const buttonGenerar = document.getElementById('btnGenerarCodigo');

buttonGenerar.addEventListener('click', generateCode);

export function generateCode(){

   const inputName = document.getElementById("functionName").value.trim();

    if(!inputName){
        alert("Por favor, ingresa un nombre para la función.");
        return;
    }

    const obtenerCodigoListar = generateCodeListarAll(inputName);

    const soloTablas = tablas.map(tabla => {
        return tabla.table
    })

    const soloColumnas = [];
    tablas.forEach(tabla => {
        soloColumnas.push(...tabla.columns)
    })

    console.log(soloColumnas)
   
    // const obtenerCodigoCrear = generateCodeCrear();
    // const obtenerCodigoActualizar = generateCodeActualizar();
    // const obtenerCodigoEliminar = generateCodeEliminar();
    hljs.highlightAll();
}






// document
//   .getElementById("generateForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const functionName = document.getElementById("functionName").value.trim();

//     if (!functionName) {
//       alert("Por favor, ingresa un nombre para la función.");
//       return;
//     }

//     const codeFiles = generateCodeFiles(functionName);
//     displayGeneratedCode(codeFiles);
//   });

// // Función que genera el contenido de los archivos
// function generateCodeFiles(functionName) {
//   const routeCode = `
//   router.get('/${functionName}', Authenticate(PERMITS.listar${capitalize(
//     functionName
//   )}), async function (req, res) {
//     const querys = await get${capitalize(
//       functionName
//     )}Schema.parseAsync(req.query);
//     const response = await get${capitalize(functionName)}(querys);
//     return res.status(response.statusCode).json(response);
//   });`;

//   const functionCode = `
//   export async function get${capitalize(functionName)}(values) {
//     const ${functionName} = await get${capitalize(functionName)}Query(values);
  
//     return new ApiResponse({
//       statusCode: 200,
//       title: 'Lista de ${functionName}',
//       message: 'Lista de ${functionName}',
//       data: ${functionName}
//     });
//   }`;

//   const queryCode = `
//   export async function get${capitalize(functionName)}Query(values) {
//     const query = db
//       .select({
//         id: ${functionName}.id,
//         nombre: ${functionName}.nombre
//       })
//       .from(${functionName})
//       .$dynamic();
  
//     const searchFilter = [];
//     if (values.search) {
//       const texto = \`%\${values.search.trim()}%\`;
//       searchFilter.push(like(${functionName}.nombre, texto));
//     }
  
//     return query
//       .where(and(or(...searchFilter), isNull(${functionName}.deletedAt)))
//       .limit(10)
//       .orderBy(asc(${functionName}.nombre));
//   }`;

//   return {
//     routeFile: routeCode,
//     functionFile: functionCode,
//     queryFile: queryCode,
//   };
// }

// // Función para mostrar el código generado en pantalla
// function displayGeneratedCode(codeFiles) {
//   const output = `
//   Archivo 1 (Rutas): ${codeFiles.routeFile}
  
//   Archivo 2 (Función): ${codeFiles.functionFile}
  
//   Archivo 3 (Consulta): ${codeFiles.queryFile}
//     `;

//   document.getElementById("codeOutput").textContent = output;
// }

// // Capitalizar la primera letra del nombre de la función
// function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
