import { lazy, Suspense } from "react";
import SiteLayout from "./layouts/SiteLayout";
import HomePage from "./pages/HomePage";

const RouterApp = lazy(() => import("./routes/RouterApp"));

export default function App() {
  if (window.location.pathname === "/") {
    return (
      <SiteLayout>
        <HomePage />
      </SiteLayout>
    );
  }

  return (
    <Suspense
      fallback={<div className="min-h-screen bg-[#07080a]" aria-hidden="true" />}
    >
      <RouterApp />
    </Suspense>
  );
}
