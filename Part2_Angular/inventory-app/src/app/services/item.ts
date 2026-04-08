/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - item.ts
 * Description: Item service and interface for inventory management
 */

import { Injectable } from '@angular/core';

// Key: Item data structure
export interface Item {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  supplier: string;
  status: string;
  isHot: boolean;
}

@Injectable({
  providedIn: 'root'  // Key: Singleton service available app-wide
})
export class ItemService {
  private items: Item[] = [];

  // Key: Add item with duplicate ID check
  addItem(item: Item) {
    const exist = this.items.some(i => i.id === item.id);
    if (exist) return false;
    this.items.push(item);
    return true;
  }

  getItems() { return this.items; }  // Key: Get all items

  // Key: Search items by name
  search(key: string) {
    return this.items.filter(i => i.name.includes(key));
  }

  // Key: Delete item by name
  delete(name: string) {
    this.items = this.items.filter(i => i.name !== name);
  }
}
