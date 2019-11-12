import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProyectoLinkComponent } from './modal-proyecto-link.component';

describe('ModalProyectoLinkComponent', () => {
  let component: ModalProyectoLinkComponent;
  let fixture: ComponentFixture<ModalProyectoLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProyectoLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProyectoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
