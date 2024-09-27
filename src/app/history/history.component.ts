import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="history">
      <h3>Historial</h3>
      <ul>
        <li *ngFor="let entry of history">{{ entry }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  @Input() history: string[] = [];
}
