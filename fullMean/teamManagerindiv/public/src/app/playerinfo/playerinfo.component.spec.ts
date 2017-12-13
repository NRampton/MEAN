import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerinfoComponent } from './playerinfo.component';

describe('PlayerinfoComponent', () => {
  let component: PlayerinfoComponent;
  let fixture: ComponentFixture<PlayerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
