import { createBrowserRouter, Outlet } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";

function RoutedSiteLayout() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

export const router = createBrowserRouter([
  {
    element: <RoutedSiteLayout />,
    children: [
      {
        path: "/blog",
        lazy: () => import("../pages/BlogListing").then(m => ({ Component: m.default })),
      },
      {
        path: "/blog/:slug",
        lazy: () => import("../pages/BlogDetail").then(m => ({ Component: m.default })),
      },
      {
        path: "/portfolio",
        lazy: () => import("../pages/Portfolio").then(m => ({ Component: m.default })),
      },
      {
        path: "/about",
        lazy: () => import("../pages/AboutUs").then(m => ({ Component: m.default })),
      },
      {
        path: "/service/web-design-development",
        lazy: () => import("../pages/WebDesignDevelopment").then(m => ({ Component: m.default })),
      },
      {
        path: "/service/digital-advertising",
        lazy: () => import("../pages/DigitalAdvertising").then(m => ({ Component: m.default })),
      },
      {
        path: "/service/content-creative",
        lazy: () => import("../pages/ContentCreative").then(m => ({ Component: m.default })),
      },
      {
        path: "*",
        lazy: () => import("../pages/NotFoundPage"),
      },
    ],
  },
]);
