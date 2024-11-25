import { createFileRoute } from "@tanstack/react-router";

// Components
import { FormListarRegistros } from "@/features/listar-registros/components";

export const Route = createFileRoute(
  "/_dashboard-layout/dashboard/listar-registros/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-4 px-12">
      <h1 className="text-white font-bold text-2xl">Listar Registros</h1>
      <FormListarRegistros />
    </main>
  );
}
