import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoInvComponent } from './pago-inv.component';

describe('PagoInvComponent', () => {
  let component: PagoInvComponent;
  let fixture: ComponentFixture<PagoInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
