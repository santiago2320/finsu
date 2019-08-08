import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularInvComponent } from './simular-inv.component';

describe('SimularInvComponent', () => {
  let component: SimularInvComponent;
  let fixture: ComponentFixture<SimularInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimularInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
