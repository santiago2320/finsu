import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenInvComponent } from './resumen-inv.component';

describe('ResumenInvComponent', () => {
  let component: ResumenInvComponent;
  let fixture: ComponentFixture<ResumenInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
