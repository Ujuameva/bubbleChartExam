import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBubbleChartComponentComponent } from './angular-bubble-chart-component.component';

describe('AngularBubbleChartComponentComponent', () => {
  let component: AngularBubbleChartComponentComponent;
  let fixture: ComponentFixture<AngularBubbleChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBubbleChartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBubbleChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
