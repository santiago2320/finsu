import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInversionistaComponent } from './registro-inversionista.component';

describe('RegistroInversionistaComponent', () => {
  let component: RegistroInversionistaComponent;
  let fixture: ComponentFixture<RegistroInversionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroInversionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
