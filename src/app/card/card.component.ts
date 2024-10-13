import { SearchComponent } from './../search/search.component';
import { Component, Input } from '@angular/core';
import { Person } from '../interfaces/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SearchComponent], 
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() person: Person | null = null;

  activeSection: 'personal' | 'geographic' | 'messages' = 'personal';
  filteredMessages: string[] = [];

  showSection(section: 'personal' | 'geographic' | 'messages') {
    this.activeSection = section;
    if (section === 'messages') {
      this.filteredMessages = this.person?.messages || [];
    }
  }

  filterMessages(query: string) {
    if (this.person) {
      this.filteredMessages = this.person.messages.filter(message =>
        message.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
}
