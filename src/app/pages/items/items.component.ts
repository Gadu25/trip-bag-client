import { Component } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import type { Item } from '../../types/item.model';
import { ItemCardComponent } from '../../components/item-card/item-card.component';

@Component({
  selector: 'app-items',
  imports: [CommonModule, FormsModule, ItemCardComponent],
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
  isLoading:boolean = false;

  constructor (private itemService:ItemService) {}

  ngOnInit () {
    this.isLoading = true;
    this.itemService.getAll().subscribe({
      next: (data) => this.items = data,
      error: (err) => console.error('Error fetching items:', err),
      complete: () => this.isLoading = false
    })
  }

  private refreshItems () {
    this.itemService.getAll().subscribe({
      next: (data) => this.items = data
    });
  }

  private resetForm () {
    this.formItem = {
      id: 0,
      name: "",
      category: "",
      isPacked: false
    }
    this.isUpdate = false;
  }

  save () {
    const request = this.isUpdate
      ? this.itemService.update(this.formItem)
      : this.itemService.add(this.formItem);

    request.subscribe({
      next: () => {
        this.refreshItems();
        this.resetForm();
      },
      error: (err) => console.error('Save failed', err)
    });
  }

  delete (id:number) {
    this.itemService.remove(id).subscribe({
      next: () => this.refreshItems(),
      error: (err) => console.error('Delete failed:', err)
    });
  }

  updateThis (item:Item) {
    this.isUpdate = true;
    this.formItem = {...item};
  }
}
