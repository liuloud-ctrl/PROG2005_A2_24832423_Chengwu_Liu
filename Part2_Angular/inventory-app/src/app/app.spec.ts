/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - app.spec.ts
 * Description: Unit tests for root App component
 */

import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app';

describe('AppComponent', () => {  // Key: Test suite for App component
  beforeEach(async () => {  // Key: Setup before each test
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
