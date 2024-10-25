import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { UserComponent } from './user/user.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { data, socialNetworks } from './data';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule, UserComponent, NotificacionesComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  users = Object.values(data); 
  socialNetworks = socialNetworks;
  selectedUser: any = null;
  selectedNotifications: any[] = [];

  addNotification(platformId: number) {
    const platform = this.socialNetworks.find((p) => p.id === platformId);
    if (!platform) return;

    this.users.forEach((user) => {
      if (user.status === 'active' && user.subscriptions.includes(platformId)) {
        if (platform.platformType === 'premium' && user.subscriptionType === 'premium') {
          if (user.amountAvailable > 0) {
            user.notifications.push(`${platform.platform} added a new ${platform.type}`);
            user.amountAvailable -= 5; 
          }
        } else if (platform.platformType === 'free') {
          user.notifications.push(`${platform.platform} added a new ${platform.type}`);
        }
      }
    });
  }

  showUserDetails(user: any) {
    this.selectedUser = user;
    this.selectedNotifications = [];
  }

  showNotifications(user: any) {
    this.selectedUser = user;
    this.selectedNotifications = user.notifications;
  }
}
