import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../interfaces/person';
import { CommonModule } from '@angular/common'; 
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() people: Person[] = [];
  @Output() selectPerson = new EventEmitter<Person>();
  @Output() deletePerson = new EventEmitter<Person>();

  select(person: Person) {
    this.selectPerson.emit(person);
  }

  delete(person: Person) {
    this.deletePerson.emit(person);
  }
}
