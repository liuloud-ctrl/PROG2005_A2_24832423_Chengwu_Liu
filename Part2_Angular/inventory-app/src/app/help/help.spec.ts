/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - help.spec.ts
 * Description: Unit tests for Help component
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpComponent } from './help';

describe('HelpComponent', () => {  // Key: Test suite for Help component
  let component: HelpComponent;  // Key: Component instance
  let fixture: ComponentFixture<HelpComponent>;  // Key: Test fixture

  beforeEach(async () => {  // Key: Setup test module
    await TestBed.configureTestingModule({
      imports: [HelpComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});