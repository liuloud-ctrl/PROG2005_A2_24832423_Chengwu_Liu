/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 1 - app.ts
 * Description: Main application logic for inventory management (TypeScript)
 */

import { Item } from './Item.js';

let inventory: Item[] = [];  // Key: In-memory storage for all inventory items

// Key: Add item with ID uniqueness validation
export function addItem(item: Item): boolean {
  const exist = inventory.some(i => i.id === item.id);
  if (exist) {
    showMessage("❌ ID already exists, cannot add");
    return false;
  }
  inventory.push(item);
  showMessage(`✅ Successfully added: ${item.name}`);
  renderList();
  return true;
}

// Key: Update item properties (Partial allows partial updates)
export function editItem(name: string, newData: Partial<Item>): boolean {
  const index = inventory.findIndex(i => i.name === name);
  if (index === -1) {
    showMessage("❌ Item not found");
    return false;
  }
  inventory[index] = { ...inventory[index], ...newData };
  showMessage("✅ Modified successfully");
  renderList();
  return true;
}

// Key: Delete item by name
export function deleteItem(name: string): boolean {
  const newList = inventory.filter(i => i.name !== name);
  if (newList.length === inventory.length) {
    showMessage("❌ Item not found");
    return false;
  }
  inventory = newList;
  showMessage(`✅ Deleted: ${name}`);
  renderList();
  return true;
}

// Key: Search items by name (case-insensitive)
export function searchByName(keyword: string): Item[] {
  const res = inventory.filter(i =>
    i.name.toLowerCase().includes(keyword.toLowerCase())
  );
  showMessage(`🔍 Found ${res.length} result(s)`);
  return res;
}

// Key: Get all inventory items
export function getAllItems(): Item[] {
  showMessage(`📦 All items: ${inventory.length}`);
  return inventory;
}

// Key: Get trending/hot items only
export function getHotItems(): Item[] {
  const hot = inventory.filter(i => i.isHot);
  showMessage(`🔥 Hot items: ${hot.length}`);
  return hot;
}

function showMessage(msg: string) {
  const el = document.getElementById("msg");
  if (el) el.innerText = msg;
}

// Key: Render items list to DOM (default shows all items)
export function renderList(list = inventory) {
  const container = document.getElementById("list");
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = "<p>No items available</p>";
    return;
  }

  container.innerHTML = list.map(item => `
    <div style="border:1px solid #ccc; padding:10px; margin:6px 0;">
      <h4>${item.name} ${item.isHot ? "🔥" : ""}</h4>
      <p>ID: ${item.id} | Category: ${item.category}</p>
      <p>Quantity: ${item.quantity} | Price: $${item.price}</p>
      <p>Supplier: ${item.supplier} | Status: ${item.status}</p>
      ${item.note ? `<p>Notes: ${item.note}</p>` : ""}
    </div>
  `).join("");
}
