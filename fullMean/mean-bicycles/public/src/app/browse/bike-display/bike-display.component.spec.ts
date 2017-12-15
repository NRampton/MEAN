import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDisplayComponent } from './bike-display.component';

describe('BikeDisplayComponent', () => {
  let component: BikeDisplayComponent;
  let fixture: ComponentFixture<BikeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
