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
        path: "*",
        lazy: () => import("../pages/NotFoundPage"),
      },
    ],
  },
]);
