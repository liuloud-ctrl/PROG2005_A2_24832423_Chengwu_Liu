/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - privacy.ts
 * Description: Privacy policy page component
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.css']
})
export class PrivacyComponent {
  title = 'Privacy Policy';  // Key: Page title
}
