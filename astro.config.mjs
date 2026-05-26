// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Use temp directory for Vite cache when running in Dropbox-synced folders
// to avoid EBUSY file lock errors. On Vercel/CI this has no effect.
const isDropbox = process.cwd().toLowerCase().includes("dropbox");

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    ...(isDropbox && {
      cacheDir: `${process.env.TEMP || "/tmp"}/herwealth-vite-cache`,
    }),
  },
});
