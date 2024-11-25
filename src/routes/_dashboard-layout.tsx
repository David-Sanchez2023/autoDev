import type { NavigationItem } from "@/types/global.type";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
} from "@ingenieria-digital/medicatel-ui/components";
import { Dashboard, Write } from "@ingenieria-digital/medicatel-ui/icons";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard-layout")({
  component: RouteComponent,
  loader: () => {
    const SIDEBAR_ITEMS: NavigationItem[] = [
      {
        icon: <Dashboard />,
        label: "Listar registros",
        route: {
          to: "/dashboard/listar-registros",
        },
      },
      {
        icon: <Write />,
        label: "Registros ById",
        route: {
          to: "/dashboard/listar-registros-by-id",
        },
      },
    ];

    return { SIDEBAR_ITEMS };
  },
});

function RouteComponent() {
  const { SIDEBAR_ITEMS } = Route.useLoaderData();
  return (
    <div className="grid min-h-svh grid-cols-[1fr_4.5fr]">
      <div>
        <Sidebar>
          <SidebarHeader>
            <Link to="/dashboard/listar-registros">
              <img
                src="https://st2.depositphotos.com/1000417/6192/v/450/depositphotos_61929501-stock-illustration-abstract-network-connection-background.jpg"
                alt="AutoDev"
                className="rounded-full"
              />
            </Link>
          </SidebarHeader>
          <SidebarContent>
            {SIDEBAR_ITEMS.map((item) => {
              return (
                <Link
                  key={item.label}
                  to={item.route.to}
                  activeProps={{
                    className:
                      "text-navy-500 font-bold *:border-navy-500 [&>div]:bg-disabled-200",
                  }}
                  activeOptions={{
                    exact: item.label === "Listar registros",
                    includeSearch: false,
                  }}
                >
                  <SidebarItem key={item.label} className="">
                    {item.icon}
                    <span>{item.label}</span>
                  </SidebarItem>
                </Link>
              );
            })}
          </SidebarContent>
        </Sidebar>
      </div>

      <div className="w-full py-14 bg-[#0f172a] ">
        <div className="container p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
