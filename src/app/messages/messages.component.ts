import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // this time, the service property is PUBLIC bc we're gonna bind to it in the template
  // Angular can only bind to PUBLIC component properties
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
