import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    setupFiles: "./vitest.setup.ts",
    environment: "jsdom",
    include: [
      "./**/*.test.{ts,tsx}", // 루트 기준 모든 폴더
    ],
    coverage: {
      reporter: ["text", "json-summary", "lcov"], // json-summary 포함
      all: true,
    },
  },
});
