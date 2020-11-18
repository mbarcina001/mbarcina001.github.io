import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrayectoriaComponent } from './trayectoria.component';

describe('TrayectoriaComponent', () => {
  let component: TrayectoriaComponent;
  let fixture: ComponentFixture<TrayectoriaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
