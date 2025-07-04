import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],

  server: {
    host: '0.0.0.0'
  },

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
