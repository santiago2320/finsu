import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInversionistaComponent } from './sidebar-inversionista.component';

describe('SidebarInversionistaComponent', () => {
  let component: SidebarInversionistaComponent;
  let fixture: ComponentFixture<SidebarInversionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarInversionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
