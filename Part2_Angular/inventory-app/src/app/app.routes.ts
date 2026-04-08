/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - app.routes.ts
 * Description: Application routing configuration
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ItemManageComponent } from './item-manage/item-manage';
import { SearchComponent } from './search/search';
import { PrivacyComponent } from './privacy/privacy';
import { HelpComponent } from './help/help';

// Key: Route definitions for the application
export const routes: Routes = [  // Key: App routes
  { path: '', component: HomeComponent },           // Key: Home page route
  { path: 'manage', component: ItemManageComponent }, // Key: Item management route
  { path: 'search', component: SearchComponent },   // Key: Search page route
  { path: 'privacy', component: PrivacyComponent }, // Key: Privacy policy route
  { path: 'help', component: HelpComponent },       // Key: Help page route
];
