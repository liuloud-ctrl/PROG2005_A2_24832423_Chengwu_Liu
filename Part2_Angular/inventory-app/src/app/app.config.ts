/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - app.config.ts
 * Description: Application configuration
 */

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Key: Application configuration object
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),      // Key: App routing
    provideClientHydration()    // Key: SSR hydration
  ]
};
