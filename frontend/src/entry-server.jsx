import { renderToString } from "react-dom/server";
import SiteLayout from "./layouts/SiteLayout";
import HomePage from "./pages/HomePage";

export function render() {
  return renderToString(
    <SiteLayout>
      <HomePage />
    </SiteLayout>,
  );
}
