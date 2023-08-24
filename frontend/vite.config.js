import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
    // server: {
    //     host: true,
    //     port: 3456, // This is the port which we will use in docker
    //     // Thanks @sergiomoura for the window fix
    //     // add the next lines if you're using windows and hot reload doesn't work
    //     watch: {
    //         usePolling: true,
    //     },
    // },
    plugins: [react(), pluginRewriteAll()],
});
