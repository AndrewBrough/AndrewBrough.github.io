import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths(),
    tanstackRouter({
      autoCodeSplitting: true
    }),
    viteReact(),
    checker({
      typescript: true,
      overlay: false,
      eslint: {
        useFlatConfig: true,
        lintCommand: "eslint src/**/*.ts*"
      }
    })
  ]
});
