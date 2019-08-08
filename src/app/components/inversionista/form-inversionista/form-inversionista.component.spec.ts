import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInversionistaComponent } from './form-inversionista.component';

describe('FormInversionistaComponent', () => {
  let component: FormInversionistaComponent;
  let fixture: ComponentFixture<FormInversionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInversionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
