import type { ComponentType } from "react";
import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import { blogPosts } from "./data/blogPosts";
import { blogHubs } from "./data/blogHubs";

const lazyDefault =
  (importFn: () => Promise<{ default: ComponentType }>) => async () => {
    const mod = await importFn();
    return { Component: mod.default };
  };

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, lazy: lazyDefault(() => import("./pages/Index")) },
      { path: "atuacao", lazy: lazyDefault(() => import("./pages/Atuacao")) },
      { path: "curriculo", lazy: lazyDefault(() => import("./pages/Curriculo")) },
      { path: "empresas", lazy: lazyDefault(() => import("./pages/Empresas")) },
      { path: "podcast", lazy: lazyDefault(() => import("./pages/Podcast")) },
      { path: "avaliacao", lazy: lazyDefault(() => import("./pages/Avaliacao")) },
      {
        path: "vestibulandos",
        lazy: lazyDefault(() => import("./pages/VestibulandoEspecialista")),
      },
      { path: "depressao", lazy: lazyDefault(() => import("./pages/ConditionPage")) },
      { path: "ansiedade", lazy: lazyDefault(() => import("./pages/ConditionPage")) },
      { path: "tdah", lazy: lazyDefault(() => import("./pages/ConditionPage")) },
      { path: "bipolaridade", lazy: lazyDefault(() => import("./pages/ConditionPage")) },
      { path: "alzheimer", lazy: lazyDefault(() => import("./pages/ConditionPage")) },
      { path: "insonia", lazy: lazyDefault(() => import("./pages/ConditionPage")) },
      {
        path: "estresse-pos-traumatico",
        lazy: lazyDefault(() => import("./pages/ConditionPage")),
      },
      { path: "blog", lazy: lazyDefault(() => import("./pages/Blog")) },
      {
        path: "blog/:slug",
        lazy: lazyDefault(() => import("./pages/BlogPost")),
        entry: "src/pages/BlogPost.tsx",
        getStaticPaths: () => blogPosts.map((p) => `/blog/${p.slug}`),
      },
      {
        path: "blog/tema/:hubSlug",
        lazy: lazyDefault(() => import("./pages/BlogHub")),
        entry: "src/pages/BlogHub.tsx",
        getStaticPaths: () => blogHubs.map((h) => `/blog/tema/${h.slug}`),
      },
      { path: "*", lazy: lazyDefault(() => import("./pages/NotFound")) },
    ],
  },
];
