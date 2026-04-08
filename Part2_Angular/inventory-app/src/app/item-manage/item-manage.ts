/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - item-manage.ts
 * Description: Component for managing inventory items (add/delete)
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService, Item } from '../services/item';

@Component({
  selector: 'app-item-manage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-manage.html',
  styleUrls: ['./item-manage.css']
})
export class ItemManageComponent implements OnInit {
  // Key: Form input fields
  id: string = '';
  name: string = '';
  category: string = '';
  quantity: number = 0;
  price: number = 0;
  supplier: string = '';
  status: string = 'In Stock';
  isHot: boolean = false;
  items: Item[] = [];  // Key: Items list

  constructor(private itemService: ItemService) {}  // Key: Inject ItemService

  // Key: Load items on component init
  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  // Key: Add new item to inventory
  addItem(): void {
    const success = this.itemService.addItem({
      id: this.id,
      name: this.name,
      category: this.category,
      quantity: this.quantity,
      price: this.price,
      supplier: this.supplier,
      status: this.status,
      isHot: this.isHot
    });
    if (success) {
      alert('Added successfully!');
      this.items = this.itemService.getItems();
      this.id = '';
      this.name = '';
      this.category = '';
      this.quantity = 0;
      this.price = 0;
      this.supplier = '';
      this.status = 'In Stock';
      this.isHot = false;
    } else {
      alert('ID already exists, failed to add!');
    }
  }

  // Key: Delete item by name
  deleteItem(name: string): void {
    this.itemService.delete(name);
    this.items = this.itemService.getItems();
    alert('Deleted successfully!');
  }

  getHotItemsCount(): number {  // Key: Count hot items
    return this.items.filter(item => item.isHot).length;
  }

  getInStockCount(): number {  // Key: Count in-stock items
    return this.items.filter(item => item.status === 'In Stock').length;
  }
}
