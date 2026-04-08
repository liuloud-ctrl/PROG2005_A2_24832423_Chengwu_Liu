/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 1 - Item.ts
 * Description: Item interface definition for inventory management
 */

// Key: Inventory item data model
export interface Item {
  id: string;
  name: string;
  category: 'Electronics'|'Furniture'|'Clothing'|'Tools'|'Others';
  quantity: number;
  price: number;
  supplier: string;
  status: 'In Stock'|'Out of Stock';
  isHot: boolean;
  note?: string;
}
