import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorRepairsComponent } from './sensor-repairs.component';

describe('SensorRepairsComponent', () => {
  let component: SensorRepairsComponent;
  let fixture: ComponentFixture<SensorRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorRepairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
