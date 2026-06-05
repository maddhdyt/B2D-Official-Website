function sendMetric(endpoint, metric) {
  const body = JSON.stringify(metric);

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, body);
    return;
  }

  fetch(endpoint, {
    body,
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
  }).catch(() => {});
}

export function reportWebVitals() {
  const endpoint = import.meta.env.VITE_WEB_VITALS_ENDPOINT;

  if (!endpoint) {
    return;
  }

  import("web-vitals").then(({ onCLS, onINP, onLCP }) => {
    const report = (metric) => sendMetric(endpoint, metric);

    onCLS(report);
    onINP(report);
    onLCP(report);
  });
}
