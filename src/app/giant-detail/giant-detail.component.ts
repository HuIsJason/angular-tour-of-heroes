import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Giant } from '../Giant';
import { GiantService }  from '../giant.service';

@Component({
  selector: 'app-giant-detail',
  templateUrl: './giant-detail.component.html',
  styleUrls: ['./giant-detail.component.scss']
})
export class GiantDetailComponent implements OnInit {

  @Input() giant: Giant;

  constructor(
    private route: ActivatedRoute, // hold information about the route to this specific instance of GiantDetailComponent
    // useful info like id is extracted from the URL

    private giantService: GiantService, // gets giant data from remote server
    private location: Location // an Angular service for interacting w/ the browser
    // for navigating back to the view that navigated here in the first place
  ) { }

  ngOnInit() {
    this.getGiant();
  }

  getGiant(): void {
    // '+' converts a string to a number
    // route.snapshot is an image of the route info after component was created
    // paramMap is a map of the parameter values extracted from URL
    const id = +this.route.snapshot.paramMap.get('id');
    this.giantService.getGiant(id).subscribe(giant => this.giant = giant);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.giantService.updateGiant(this.giant).subscribe(() => this.goBack());
  }
}
