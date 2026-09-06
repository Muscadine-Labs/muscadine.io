"use client";

import { useEffect, useState, type ComponentType } from "react";

type AnalyticsComponents = {
  Analytics: ComponentType;
  SpeedInsights: ComponentType;
};

export default function DeferredAnalytics() {
  const [components, setComponents] = useState<AnalyticsComponents | null>(null);

  useEffect(() => {
    const load = () => {
      void Promise.all([
        import("@vercel/analytics/react"),
        import("@vercel/speed-insights/next"),
      ]).then(([analytics, speedInsights]) => {
        setComponents({
          Analytics: analytics.Analytics,
          SpeedInsights: speedInsights.SpeedInsights,
        });
      });
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }

    const id = setTimeout(load, 2000);
    return () => clearTimeout(id);
  }, []);

  if (!components) {
    return null;
  }

  const { Analytics, SpeedInsights } = components;
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
