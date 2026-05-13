import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import { personSchema } from "@/data/structured-data";

const queryClient = new QueryClient();

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollToTop />
      <JsonLd data={personSchema} />
      <Toaster />
      <Sonner />
      <Outlet />
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default Layout;
