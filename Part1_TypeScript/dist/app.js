/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 1 - app.ts
 * Description: Main application logic for inventory management (TypeScript)
 */
// Key: In-memory inventory storage
let inventory = [];
export function addItem(item) {
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
export function editItem(name, newData) {
    const index = inventory.findIndex(i => i.name === name);
    if (index === -1) {
        showMessage("❌ Item not found");
        return false;
    }
    inventory[index] = Object.assign(Object.assign({}, inventory[index]), newData);
    showMessage("✅ Modified successfully");
    renderList();
    return true;
}
export function deleteItem(name) {
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
export function searchByName(keyword) {
    const res = inventory.filter(i => i.name.toLowerCase().includes(keyword.toLowerCase()));
    showMessage(`🔍 Found ${res.length} result(s)`);
    return res;
}
export function getAllItems() {
    showMessage(`📦 All items: ${inventory.length}`);
    return inventory;
}
export function getHotItems() {
    const hot = inventory.filter(i => i.isHot);
    showMessage(`🔥 Hot items: ${hot.length}`);
    return hot;
}
function showMessage(msg) {
    const el = document.getElementById("msg");
    if (el)
        el.innerText = msg;
}
export function renderList(list = inventory) {
    const container = document.getElementById("list");
    if (!container)
        return;
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
