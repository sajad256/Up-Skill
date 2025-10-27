import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // same as '0.0.0.0', makes server accessible on LAN
    port: 5173, // you can change this if needed
    open: true, // don't open on PC if you want to just view on mobile
  },
});
