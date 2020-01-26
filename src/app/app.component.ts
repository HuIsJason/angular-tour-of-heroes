import { Component } from '@angular/core';

import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Norse World';
}
