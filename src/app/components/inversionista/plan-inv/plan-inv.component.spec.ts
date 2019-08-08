import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanInvComponent } from './plan-inv.component';

describe('PlanInvComponent', () => {
  let component: PlanInvComponent;
  let fixture: ComponentFixture<PlanInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
