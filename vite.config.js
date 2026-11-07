import { readFileSync } from "node:fs";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Every runtime dependency is bundled at startup so a package first imported
// mid-session can't make the server render load a second React.
// Not listed: React itself, the TanStack Start/Router framework (its plugin bundles it) and build-time plugins.
const NOT_PREBUNDLED = new Set(["react", "react-dom", "@tanstack/react-start", "@tanstack/react-router", "@tanstack/react-router-ssr-query", "tailwindcss-animate"]);
const { dependencies } = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const PREBUNDLE = Object.keys(dependencies).filter((name) => !NOT_PREBUNDLED.has(name));

export default defineConfig({
  resolve: {
    alias: { "@": "/src" },
  },
  optimizeDeps: { include: PREBUNDLE },
  plugins: [
    tanstackStart({ srcDirectory: "src" }),
    react(),
  ],
});
