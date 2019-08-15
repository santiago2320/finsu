import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInversionistaComponent } from './home-inversionista.component';

describe('HomeInversionistaComponent', () => {
  let component: HomeInversionistaComponent;
  let fixture: ComponentFixture<HomeInversionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInversionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
