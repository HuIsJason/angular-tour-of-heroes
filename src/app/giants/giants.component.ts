import { Component, OnInit } from '@angular/core';
import { Giant } from '../Giant';
import { GiantService } from '../giant.service';

@Component({
  selector: 'app-giants', // component's CSS element selector
  templateUrl: './giants.component.html', // path to the component's private template file
  styleUrls: ['./giants.component.scss'] // path to the component's private SCSS styles
})

// 'export' means the class is importable by other components/modules
export class GiantsComponent implements OnInit {

  // these instance variables are called PROPERTIES
  giants: Giant[]; // now a simple declaration, but we need to use GiantService to get the Array

  // the constructor both defines a (private) property, as well as itself as a the GiantService injection site
  // GiantService is also a singleton
  constructor(private giantService: GiantService) { }

  // lifecycle hook: Angular calls ngOnInit() after creating the component (place startup logic here)
  ngOnInit() {
    this.getGiants(); // on creation of this component, call the getHeroes() method to gather the Giants Array
  }

  getGiants(): void {
    // this new .subscribe() SUBSCRIBES us to the Obserable returned by giantService().getGiants(), so that WHEN the data
    // is emitted, we are subscribed to receive that Array whenever it comes
    this.giantService.getGiants().subscribe(giants => this.giants = giants);
  }

  // adds a new giant
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.giantService.addGiant({ name } as Giant)
      .subscribe(giant => {
        this.giants.push(giant);
      });
  }

  delete(giant: Giant): void {
    this.giants = this.giants.filter(h => h !== giant);
    this.giantService.deleteGiant(giant).subscribe();
  }
}
