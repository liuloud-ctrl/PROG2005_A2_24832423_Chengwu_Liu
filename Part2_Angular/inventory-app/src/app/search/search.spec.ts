/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - search.spec.ts
 * Description: Unit tests for Search component
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search';

describe('SearchComponent', () => {  // Key: Test suite for Search component
  let component: SearchComponent;  // Key: Component instance
  let fixture: ComponentFixture<SearchComponent>;  // Key: Test fixture

  beforeEach(async () => {  // Key: Setup test module
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
