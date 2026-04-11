import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Atuacao from "./pages/Atuacao.tsx";
import Blog from "./pages/Blog.tsx";
import Empresas from "./pages/Empresas.tsx";
import Podcast from "./pages/Podcast.tsx";
import Avaliacao from "./pages/Avaliacao.tsx";
import BlogHub from "./pages/BlogHub.tsx";
import NotFound from "./pages/NotFound.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import VestibulandoEspecialista from "./pages/VestibulandoEspecialista.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
