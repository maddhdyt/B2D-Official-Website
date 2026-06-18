import { lazy, Suspense } from "react";

const RouterApp = lazy(() => import("./routes/RouterApp"));

export default function App() {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-[#07080a]" aria-hidden="true" />}
    >
      <RouterApp />
    </Suspense>
  );
}
