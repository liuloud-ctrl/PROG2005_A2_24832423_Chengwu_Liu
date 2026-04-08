/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - privacy.spec.ts
 * Description: Unit tests for Privacy component
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyComponent } from './privacy';

describe('PrivacyComponent', () => {  // Key: Test suite for Privacy component
  let component: PrivacyComponent;  // Key: Component instance
  let fixture: ComponentFixture<PrivacyComponent>;  // Key: Test fixture

  beforeEach(async () => {  // Key: Setup test module
    await TestBed.configureTestingModule({
      imports: [PrivacyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
