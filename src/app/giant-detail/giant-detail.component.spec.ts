import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiantDetailComponent } from './giant-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { GiantsComponent } from '../giants/giants.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { GiantSearchComponent } from '../giant-search/giant-search.component';
import { HttpClientModule } from '@angular/common/http';

describe('GiantDetailComponent', () => {
  let component: GiantDetailComponent;
  let fixture: ComponentFixture<GiantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, FormsModule, HttpClientModule ],
      declarations: [ GiantDetailComponent, GiantsComponent, DashboardComponent, GiantSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
