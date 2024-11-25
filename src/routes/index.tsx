import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@ingenieria-digital/medicatel-ui/components";
import { ChevronRight } from "@ingenieria-digital/medicatel-ui/icons";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="bg-[#0f172a] min-h-svh flex items-center justify-center flex-col gap-4">
      <h1 className=" text-white text-center text-2xl">
        Bienvenido al generador de código AutoDev
      </h1>
      <ButtonRedirect />
    </div>
  );
}

function ButtonRedirect() {
  return (
    <Link
      to="/dashboard/listar-registros"
      className=" w-fit flex justify-center"
    >
      <Button className="flex justify-between gap-7 pl-7">
        Comencemos
        <div className="bg-disabled-100 size-5 rounded-full">
          <ChevronRight className="size-full p-1 text-navy-500" />
        </div>
      </Button>
    </Link>
  );
}
