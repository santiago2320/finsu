import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMasInvComponent } from './ver-mas-inv.component';

describe('VerMasInvComponent', () => {
  let component: VerMasInvComponent;
  let fixture: ComponentFixture<VerMasInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMasInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMasInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
