import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationDemoComponent } from './string-interpolation-demo.component';

describe('StringInterpolationDemoComponent', () => {
  let component: StringInterpolationDemoComponent;
  let fixture: ComponentFixture<StringInterpolationDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringInterpolationDemoComponent]
    });
    fixture = TestBed.createComponent(StringInterpolationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
