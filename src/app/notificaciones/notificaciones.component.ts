import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.scss'
})

export class NotificacionesComponent {
  @Input() notifications: any[] = [];
  @Input() socialNetworks: any[] = [];

  getNotificationClass(notification: string): string {
    const platform = this.socialNetworks.find(sn => notification.includes(sn.platform));
    if (platform) {
      return `${platform.platform}-notification`;
    }
    return '';
  }
}
