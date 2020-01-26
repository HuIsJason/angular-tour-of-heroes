import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiantDetailComponent } from './giant-detail.component';

describe('GiantDetailComponent', () => {
  let component: GiantDetailComponent;
  let fixture: ComponentFixture<GiantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiantDetailComponent ]
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
