import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInvComponent } from './perfil-inv.component';

describe('PerfilInvComponent', () => {
  let component: PerfilInvComponent;
  let fixture: ComponentFixture<PerfilInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
