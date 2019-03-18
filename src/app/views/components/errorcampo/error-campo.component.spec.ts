import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCampoComponent } from './error-campo.component';

describe('ErrorCampoComponent', () => {
  let component: ErrorCampoComponent;
  let fixture: ComponentFixture<ErrorCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
