import { createFileRoute } from "@tanstack/react-router";

// Components
import { FormCrearRegistros } from "@/features/crear-registros/components";

export const Route = createFileRoute(
  "/_dashboard-layout/dashboard/crear-registros/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-4 px-12">
      <h1 className="text-white font-bold text-2xl">Crear registros</h1>
      <FormCrearRegistros />
    </main>
  );
}
