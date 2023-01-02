import path from "path";
import solidPlugin from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    deps: {
      registerNodeLoader: true,
      inline: [/solid-js/],
    },
    environment: "jsdom",
    globals: true,
    setupFiles: [
      "node_modules/@testing-library/jest-dom/extend-expect",
      "./setupVitest.ts",
    ],
    transformMode: { web: [/\.[jt]sx?$/] },
  },
  base: "./",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    conditions: ["development", "browser"],
  },
});
