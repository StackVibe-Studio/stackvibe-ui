import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const isGithubPages = !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  base: isGithubPages ? '/stackvibe-ui/playground/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
});
