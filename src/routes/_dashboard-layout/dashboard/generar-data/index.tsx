import { createFileRoute } from "@tanstack/react-router";

// Components
import { SchemastoArray } from "@/features/generar-data/components";
import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

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
      {/* // Ejemplo de como utilizar context */}
      <Switch indexActive={1}>
        <ItemSwitch index={1}>Mensual</ItemSwitch>
        <ItemSwitch index={2}>Anual</ItemSwitch>
        <ItemSwitch index={3}>
          <div className="flex gap-2 items-center">
            <span>Trimestral</span>
            <span className="rounded-full bg-white size-3">{""}</span>
          </div>
        </ItemSwitch>
      </Switch>
    </main>
  );
}

// Ejemplo de como utilizar context

interface ContextSwitchType {
  active: number;
  setActive: (index: number) => void;
}

const ContextSwitch = createContext<ContextSwitchType | undefined>(undefined);

interface SwitchProps {
  children: React.ReactNode;
  indexActive?: number;
}
function Switch({ children, indexActive }: SwitchProps) {
  const [active, setActive] = useState<number>(indexActive || 0);

  return (
    <ContextSwitch.Provider value={{ active, setActive }}>
      <div className="flex max-w-fit border rounded-xl">{children}</div>
    </ContextSwitch.Provider>
  );
}

interface ItemSwitchType {
  children: React.ReactNode;
  index: number;
}
function ItemSwitch({ children, index }: ItemSwitchType) {
  const context = useContext(ContextSwitch);

  const { active, setActive } = context as ContextSwitchType  ;
  const isActive = active === index;

  return (
    <button
      className={cn(
        "p-2 text-xs rounded-xl min-w-20",
        isActive ? "text-white bg-navy-500" : "text-navy-500",
      )}
      type="button"
      onClick={() => setActive(index)}
    >
      {children}
    </button>
  );
}
