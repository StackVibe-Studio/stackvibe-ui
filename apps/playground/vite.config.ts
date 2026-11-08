import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const isGithubPages = !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  base: isGithubPages ? '/stackvibe-ui/playground/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
});
