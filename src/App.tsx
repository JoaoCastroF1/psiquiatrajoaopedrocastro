import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const Atuacao = lazy(() => import("./pages/Atuacao.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const Empresas = lazy(() => import("./pages/Empresas.tsx"));
const Podcast = lazy(() => import("./pages/Podcast.tsx"));
const Avaliacao = lazy(() => import("./pages/Avaliacao.tsx"));
const BlogHub = lazy(() => import("./pages/BlogHub.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const VestibulandoEspecialista = lazy(() => import("./pages/VestibulandoEspecialista.tsx"));
const ConditionPage = lazy(() => import("./pages/ConditionPage.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Analytics />
      <SpeedInsights />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/atuacao" element={<Atuacao />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/tema/:hubSlug" element={<BlogHub />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/avaliacao" element={<Avaliacao />} />
            <Route path="/vestibulandos" element={<VestibulandoEspecialista />} />
            <Route path="/depressao" element={<ConditionPage />} />
            <Route path="/ansiedade" element={<ConditionPage />} />
            <Route path="/tdah" element={<ConditionPage />} />
            <Route path="/bipolaridade" element={<ConditionPage />} />
            <Route path="/alzheimer" element={<ConditionPage />} />
            <Route path="/insonia" element={<ConditionPage />} />
            <Route path="/estresse-pos-traumatico" element={<ConditionPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
