import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableinversionistaComponent } from './tableinversionista.component';

describe('TableinversionistaComponent', () => {
  let component: TableinversionistaComponent;
  let fixture: ComponentFixture<TableinversionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableinversionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableinversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
