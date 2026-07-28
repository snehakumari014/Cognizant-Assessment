import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  providers: [NotificationService], // Creates a new service instance only for this component and its children.
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {

  constructor(public notificationService: NotificationService) {}

}