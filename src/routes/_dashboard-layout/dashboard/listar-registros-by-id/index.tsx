
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_dashboard-layout/dashboard/listar-registros-by-id/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex flex-col gap-4 px-12">
      <h1 className="text-white font-bold text-2xl">Listar Registros By Id</h1>
      {/* <FormListarRegistrosById /> */}
    </main>
  );
}
