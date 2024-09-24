import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // Ensure this is installed
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "src"), // Use path.resolve for better compatibility
    },
  },

  build: {
    cssCodeSplit: true,
    target: "esnext", // You can also specify the target to match your project requirements
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Ensure your entry file is correctly specified
      name: "GithubPackagesUiLibrary",
      fileName: (format) => `github-packages-ui-library.${format}.js`, // Properly format the output file name
    },

    rollupOptions: {
      external: ["vue"], // Specify any external dependencies not included in your bundle
      output: {
        globals: {
          vue: "Vue", // Make Vue available globally
        },
      },
    },
  },
});
