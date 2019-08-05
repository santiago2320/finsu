import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompradorComponent } from './form-comprador.component';

describe('FormCompradorComponent', () => {
  let component: FormCompradorComponent;
  let fixture: ComponentFixture<FormCompradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
