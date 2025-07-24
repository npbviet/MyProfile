import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MyProfile/",
  root: ".",
  build: {
    outDir: "./dist",
    emptyOutDir: true,
  },
  plugins: [react()],
});
