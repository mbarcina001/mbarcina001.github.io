import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProyectosComponent } from './modal-proyectos.component';

describe('ModalProyectosComponent', () => {
  let component: ModalProyectosComponent;
  let fixture: ComponentFixture<ModalProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
