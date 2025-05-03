/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         "@components": path.resolve(__dirname, "src/components"),
         "@assets": path.resolve(__dirname, "src/assets"),
         "@pages": path.resolve(__dirname, "src/pages"),
         "@scss": path.resolve(__dirname, "src/assets/scss"),
         "@services": path.resolve(__dirname, "src/services"),
         "@layout": path.resolve(__dirname, "src/layout"),
         "@hooks": path.resolve(__dirname, "src/hooks"),
         "@context": path.resolve(__dirname, "src/context"),
      },
   },
});
