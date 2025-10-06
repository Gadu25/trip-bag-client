import { Injectable } from '@angular/core';
import type { Item } from '../types/item.model';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private items:Item[] = [];
  private nextId = 1;

  constructor() { }

  getAll ():Item[] {
    return [...this.items];
  }

  add (item:Item) {
    console.log("test addd", item)
    this.items.push({...item, id: this.nextId});
    this.nextId++;
  }

  update (newItem:Item) {
    this.items = this.items.map((item) => (item.id === newItem.id ? {...newItem} : item));
  }

  remove (id:number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

}
