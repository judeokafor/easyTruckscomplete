import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcommentsComponent } from './dashboardcomments.component';

describe('DashboardcommentsComponent', () => {
  let component: DashboardcommentsComponent;
  let fixture: ComponentFixture<DashboardcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
