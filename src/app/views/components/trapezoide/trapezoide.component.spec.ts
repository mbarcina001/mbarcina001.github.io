import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezoideComponent } from './trapezoide.component';

describe('TrapezoideComponent', () => {
  let component: TrapezoideComponent;
  let fixture: ComponentFixture<TrapezoideComponent>;

  beforeEach(async(() => {
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
