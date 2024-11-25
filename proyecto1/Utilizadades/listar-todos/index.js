import { generateControllerListarAll } from './controller.js';
import { generateRouterListarAll } from './router.js';
import { generateSchemaListarAll } from './schemas.js'

export function generateCodeListarAll(name){

    const schema = generateSchemaListarAll(name);
    const router = generateRouterListarAll(name);
    const controller = generateControllerListarAll(name)
    const query = generateControllerListarAll(name)


    const codigo = `
    <div class='flex flex-col gap-5 bg-[#0f172a]'>
    <div class="flex flex-col gap-2 ">
        <h2 class=" text-lg ">Schemas</h2>
        ${schema}
    </div>

    <div class="flex flex-col gap-2 ">
        <h2 class=" text-lg ">Router</h2>
        ${router}
    </div>

    <div class="flex flex-col gap-2 ">
        <h2 class=" text-lg ">Controller</h2>
        ${controller}
    </div>

        <div class="flex flex-col gap-2 ">
        <h2 class=" text-lg ">Querys</h2>
        ${controller}
    </div>
</div>
    `

    document.getElementById("mostrarCodigo").innerHTML  = codigo;
    hljs.highlightAll();
}


