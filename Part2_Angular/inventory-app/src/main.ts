/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - main.ts
 * Description: Main entry point for Angular inventory application
 */

// Key: Angular bootstrap imports
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, appConfig)  // Key: Start Angular app
  .catch((err) => console.error(err));
