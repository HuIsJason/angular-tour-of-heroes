import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiantsComponent } from './giants/giants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GiantDetailComponent } from "./giant-detail/giant-detail.component";

const routes: Routes = [
  // path: the URL path when seeing the component
  // the component the router creates when at this route
  { path: 'giants', component: GiantsComponent },
  { path: 'dashboard', component: DashboardComponent },
  // the router redirects the empty path, '', to the dashboard path where the Dashboard comp is displayed
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // id is used in the URL, to specify which id's details are being viewed
  // :is a placeholder for a specifc giant id
  { path: 'detail/:id', component: GiantDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
