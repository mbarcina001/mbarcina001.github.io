import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorCampoComponent } from './error-campo.component';

describe('ErrorCampoComponent', () => {
  let component: ErrorCampoComponent;
  let fixture: ComponentFixture<ErrorCampoComponent>;

  beforeEach(waitForAsync(() => {
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
