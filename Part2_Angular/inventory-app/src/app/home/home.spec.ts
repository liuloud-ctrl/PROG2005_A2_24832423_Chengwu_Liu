/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - home.spec.ts
 * Description: Unit tests for Home component
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home';

describe('HomeComponent', () => {  // Key: Test suite for Home component
  let component: HomeComponent;  // Key: Component instance
  let fixture: ComponentFixture<HomeComponent>;  // Key: Test fixture

  beforeEach(async () => {  // Key: Setup test module
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
