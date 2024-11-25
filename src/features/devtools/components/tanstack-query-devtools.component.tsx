import { Suspense, lazy } from "react";

const LazyTanStackQueryDevtools = lazy(async () => {
  const { ReactQueryDevtools } = await import("@tanstack/react-query-devtools");

  return { default: ReactQueryDevtools };
});

export function TanStackQueryDevtools() {
  if (import.meta.env.PROD) return null;

  return (
    <Suspense fallback={null}>
      <LazyTanStackQueryDevtools />
    </Suspense>
  );
}
