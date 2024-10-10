import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from './data';
import { Person } from './interfaces/person';
import { SearchComponent } from "./search/search.component";
import { ListComponent } from "./list/list.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent, ListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  people: Person[] = Object.values(data).map(item => {
    if (item.type === 'student' || item.type === 'professor') {
      return item as Person; 
    } else {
      throw new Error('Tipo no válido encontrado en los datos');
    }
  });

  person: { name?: string; type?: string } | null = null; 
  filteredPeople: Person[] = [...this.people]; 
  selectedPerson: Person | null = null;

  filterPeople(query: string): void {
    this.filteredPeople = this.people.filter(person =>
      person.name.toLowerCase().includes(query.toLowerCase()) ||
      person.lastName.toLowerCase().includes(query.toLowerCase())
    );
  }

  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }

  deletePerson(person: Person): void {
    this.filteredPeople = this.filteredPeople.filter(p => p !== person);
    this.selectedPerson = null; 
  }
}