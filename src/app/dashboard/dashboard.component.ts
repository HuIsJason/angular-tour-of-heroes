import { Component, OnInit } from '@angular/core';
import { Giant } from '../Giant';
import { GiantService } from '../giant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = 'Most Powerful Giants';
  giants: Giant[] = [];

  constructor(private giantService: GiantService) { }

  ngOnInit() {
    this.getGiants();
  }

  getGiants(): void {
    // subscribes to the Observable that the GiantService returns
    // in the callback, assigns the Giant Array to the returned one from the service
    // however, slice it from 1 to 5 to get the top 5 Giants
    this.giantService.getGiants().subscribe(giants => this.giants = giants.slice(1,5));
  }

}
