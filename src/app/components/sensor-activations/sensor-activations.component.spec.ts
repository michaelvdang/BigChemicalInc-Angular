import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorActivationsComponent } from './sensor-activations.component';

describe('SensorActivationsComponent', () => {
  let component: SensorActivationsComponent;
  let fixture: ComponentFixture<SensorActivationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorActivationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorActivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
