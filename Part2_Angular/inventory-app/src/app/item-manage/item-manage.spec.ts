/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - item-manage.spec.ts
 * Description: Unit tests for Item Manage component
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManageComponent } from './item-manage';

describe('ItemManageComponent', () => {  // Key: Test suite for Item Management component
  let component: ItemManageComponent;  // Key: Component instance
  let fixture: ComponentFixture<ItemManageComponent>;  // Key: Test fixture

  beforeEach(async () => {  // Key: Setup test module
    await TestBed.configureTestingModule({
      imports: [ItemManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemManageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
