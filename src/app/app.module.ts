import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiantsComponent } from './giants/giants.component';
import { GiantDetailComponent } from './giant-detail/giant-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // the web api used to simulate a live server HTTP response
import { InMemoryDataService }  from './in-memory-data.service';
import { GiantSearchComponent } from './giant-search/giant-search.component';

@NgModule({
  // this module's components
  declarations: [
    AppComponent,
    GiantsComponent,
    GiantDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GiantSearchComponent
  ],
  // the other modules this module has uses for
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // HttpClientInMemoryWebAPIModule module intercepts HTTP requests
    // and returns simulated server responses without having to request to a real live server.
    // Remove it when a real server is ready to receive CRUD requests.
    HttpClientInMemoryWebApiModule.forRoot( // takes an InMemoryDataService and primes it in-memory db
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
