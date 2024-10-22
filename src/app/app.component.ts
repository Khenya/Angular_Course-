import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { UserComponent } from './user/user.component';
import { data, socialNetworks } from './data';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule, UserComponent],  
  templateUrl: './app.component.html',
   styleUrl: './app.component.scss'
})

export class AppComponent {
  users = Object.values(data); 
  socialNetworks = socialNetworks;

  addNotification(platformId: number) {
    const platform = this.socialNetworks.find((p) => p.id === platformId);
    if (!platform) return;

    this.users.forEach((user) => {
      if (user.subscriptions.includes(platformId)) {
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
}
