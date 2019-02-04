import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitTimesComponent } from './wait-times.component';

describe('WaitTimesComponent', () => {
  let component: WaitTimesComponent;
  let fixture: ComponentFixture<WaitTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
