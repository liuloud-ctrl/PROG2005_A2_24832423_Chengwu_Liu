/**
 * Author: Chengwu Liu
 * Student ID: 24832423
 * Module: PROG2005 A2 - Part 2 - search.ts
 * Description: Search component for inventory items
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService, Item } from '../services/item';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent {
  // Key: Search input and results
  keyword: string = '';  // Key: Search keyword
  searchResults: Item[] = [];  // Key: Search results array
  hasSearched: boolean = false;  // Key: Search state flag

  constructor(private itemService: ItemService) {}  // Key: Inject ItemService

  // Key: Search items by keyword
  searchItem(): void {
    this.hasSearched = true;  // Key: Mark that search was performed
    this.searchResults = this.itemService.search(this.keyword);
  }
}
