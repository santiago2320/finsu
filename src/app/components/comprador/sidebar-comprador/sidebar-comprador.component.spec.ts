import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCompradorComponent } from './sidebar-comprador.component';

describe('SidebarCompradorComponent', () => {
  let component: SidebarCompradorComponent;
  let fixture: ComponentFixture<SidebarCompradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCompradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
