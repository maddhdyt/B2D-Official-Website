import { createBrowserRouter, Outlet } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import ProtectedRoute from "../components/admin/ProtectedRoute";

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
  {
    path: "/admin/login",
    lazy: () => import("../pages/admin/Login").then(m => ({ Component: m.default })),
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        lazy: () => import("../layouts/AdminLayout").then(m => ({ Component: m.default })),
        children: [
          {
            path: "dashboard",
            lazy: () => import("../pages/admin/Dashboard").then(m => ({ Component: m.default })),
          },
          {
            path: "blogs",
            lazy: () => import("../pages/admin/blogs/BlogList").then(m => ({ Component: m.default })),
          },
          {
            path: "blogs/create",
            lazy: () => import("../pages/admin/blogs/BlogForm").then(m => ({ Component: m.default })),
          },
          {
            path: "blogs/edit/:slug",
            lazy: () => import("../pages/admin/blogs/BlogForm").then(m => ({ Component: m.default })),
          },
          {
            path: "portfolios",
            lazy: () => import("../pages/admin/portfolios/PortfolioList").then(m => ({ Component: m.default })),
          },
          {
            path: "portfolios/create",
            lazy: () => import("../pages/admin/portfolios/PortfolioForm").then(m => ({ Component: m.default })),
          },
          {
            path: "portfolios/edit/:slug",
            lazy: () => import("../pages/admin/portfolios/PortfolioForm").then(m => ({ Component: m.default })),
          },
          {
            path: "leads",
            lazy: () => import("../pages/admin/leads/LeadList").then(m => ({ Component: m.default })),
          },
          {
            path: "seo",
            lazy: () => import("../pages/admin/seo/SeoList").then(m => ({ Component: m.default })),
          }
        ]
      }
    ]
  }
]);
