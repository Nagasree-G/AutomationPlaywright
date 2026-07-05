import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
   timeout: 35* 1000,

  // Timeout for expect assertions
  expect: {
    timeout: 5000,
  },
  /* Configure projects for major browsers */
  reporter: 'html',
    use:{
      browserNamename: 'chromium',
      headless: false,
    },

});


