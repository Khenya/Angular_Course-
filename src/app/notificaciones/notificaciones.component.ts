import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.scss'
})
export class NotificationCardComponent {
  @Input() message: string = '';
  @Input() color: string = '';
}