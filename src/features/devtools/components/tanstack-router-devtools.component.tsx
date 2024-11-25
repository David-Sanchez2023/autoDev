import { Suspense, lazy } from "react";

const LazyTanStackRouterDevtools = lazy(async () => {
  const { TanStackRouterDevtools } = await import("@tanstack/router-devtools");

  return { default: TanStackRouterDevtools };
});

export function TanStackRouterDevtools() {
  if (import.meta.env.PROD) return null;

  return (
    <Suspense fallback={null}>
      <LazyTanStackRouterDevtools />
    </Suspense>
  );
}
