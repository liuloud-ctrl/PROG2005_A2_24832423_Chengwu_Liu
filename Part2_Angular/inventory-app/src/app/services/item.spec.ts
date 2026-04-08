/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - item.spec.ts
 * Description: Unit tests for Item service
 */

import { TestBed } from '@angular/core/testing';
import { ItemService } from './item';

describe('ItemService', () => {  // Key: Test suite for Item service
  let service: ItemService;  // Key: Service instance

  beforeEach(() => {  // Key: Setup test module
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});