import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalProyectoLinkComponent } from './modal-proyecto-link.component';

describe('ModalProyectoLinkComponent', () => {
  let component: ModalProyectoLinkComponent;
  let fixture: ComponentFixture<ModalProyectoLinkComponent>;

  beforeEach(waitForAsync(() => {
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
