import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecompradorComponent } from './tablecomprador.component';

describe('TablecompradorComponent', () => {
  let component: TablecompradorComponent;
  let fixture: ComponentFixture<TablecompradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecompradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
