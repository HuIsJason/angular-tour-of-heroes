import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiantsComponent } from './giants.component';

describe('GiantsComponent', () => {
  let component: GiantsComponent;
  let fixture: ComponentFixture<GiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
