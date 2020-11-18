import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalProyectosComponent } from './modal-proyectos.component';

describe('ModalProyectosComponent', () => {
  let component: ModalProyectosComponent;
  let fixture: ComponentFixture<ModalProyectosComponent>;

  beforeEach(waitForAsync(() => {
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
