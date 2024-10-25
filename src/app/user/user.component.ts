import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
 
})
export class UserComponent {
  @Input() user: any;

  setSubscriptionType(type: string) {
    this.user.subscriptionType = type;
  }
}
