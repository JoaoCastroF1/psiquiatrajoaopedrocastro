import type { ReactNode } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { render, type RenderResult } from "@testing-library/react";

interface RenderOptions {
  /** Path mounted as the route. Defaults to "*" so any initialPath matches. */
  path?: string;
  /** Initial URL the router starts at. */
  initialPath?: string;
}

/**
 * Render a single page/component inside the providers it expects at runtime
 * (QueryClient, Tooltip, react-router) so smoke tests don't have to repeat
 * the boilerplate. For pages that read params (BlogPost, BlogHub,
 * ConditionPage), pass `path` and `initialPath` so useParams resolves.
 */
export function renderRoute(
  element: ReactNode,
  { path = "*", initialPath = "/" }: RenderOptions = {},
): RenderResult {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MemoryRouter initialEntries={[initialPath]}>
          <Routes>
            <Route path={path} element={element} />
          </Routes>
        </MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>,
  );
}
