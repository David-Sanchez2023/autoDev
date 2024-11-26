import { createFileRoute } from "@tanstack/react-router";

// Components
import { SchemastoArray } from "@/features/generar-data/components";

export const Route = createFileRoute(
  "/_dashboard-layout/dashboard/generar-data/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-4 px-12">
      <h1 className="text-white font-bold text-2xl">Generar data</h1>
      <SchemastoArray />
    </main>
  );
}
