import { Component } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import type { Item } from '../../types/item.model';

@Component({
  selector: 'app-items',
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  items:Item[] = [];
  formItem:Item = {
    id: 0,
    name: "",
    category: "",
    isPacked: false
  };
  isUpdate:boolean = false;

  constructor (private itemService:ItemService) {}

  ngOnInit () {
    this.items = this.itemService.getAll();
  }

  save () {
    if (this.isUpdate) {
      this.itemService.update(this.formItem);
      this.isUpdate = false;
    } else {
      this.itemService.add(this.formItem);
    }
    this.items = this.itemService.getAll();
    this.formItem = {
      id: 0,
      name: "",
      category: "",
      isPacked: false
    }
  }

  delete (id:number) {
    this.itemService.remove(id);
    this.items = this.itemService.getAll();
  }

  updateThis (item:Item) {
    this.isUpdate = true;
    this.formItem = {...item};
  }
}
