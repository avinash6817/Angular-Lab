import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDemoComponent } from './ng-if-demo.component';

describe('NgIfDemoComponent', () => {
  let component: NgIfDemoComponent;
  let fixture: ComponentFixture<NgIfDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfDemoComponent]
    });
    fixture = TestBed.createComponent(NgIfDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
