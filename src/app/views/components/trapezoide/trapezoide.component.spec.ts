import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrapezoideComponent } from './trapezoide.component';

describe('TrapezoideComponent', () => {
  let component: TrapezoideComponent;
  let fixture: ComponentFixture<TrapezoideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapezoideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapezoideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
