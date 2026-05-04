import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/layouts/MainLayout";

const Index = lazy(() => import("./pages/Index"));
const Atuacao = lazy(() => import("./pages/Atuacao"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogHub = lazy(() => import("./pages/BlogHub"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Empresas = lazy(() => import("./pages/Empresas"));
const Podcast = lazy(() => import("./pages/Podcast"));
const Avaliacao = lazy(() => import("./pages/Avaliacao"));
const VestibulandoEspecialista = lazy(() =>
  import("./pages/VestibulandoEspecialista"),
);
const ConditionPage = lazy(() => import("./pages/ConditionPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route element={<MainLayout />}>
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
            </Route>
            {/* 404 stays outside MainLayout to keep its current standalone style */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
