import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Item } from '../../types/item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})

export class ItemCardComponent {
  @Input() item!: Item;

  @Output() update = new EventEmitter<Item>();
  @Output() delete = new EventEmitter<number>();

  onUpdate () {
    this.update.emit(this.item);
  }

  onDelete () {
    console.log("delete test")
    this.delete.emit(this.item.id);
  }
}
