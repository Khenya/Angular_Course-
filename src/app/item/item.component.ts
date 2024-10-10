import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../interfaces/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() person: Person | null = null;
  @Output() select = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onSelect() {
    this.select.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}