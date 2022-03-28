import { ComponentFixture, TestBed,async } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label} from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartComponent ],
      imports: [ RouterTestingModule,ChartsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      { provide: Router, useValue: routerSpy }
    ]
  })
});
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test a method named percentageCalculation', async(() => {
    expect(component.percentageCalculation()).toEqual([82.75,89,89.33333333333331]);
  }));
  
 it('should navigate to grades', async(() => {
  spyOn(component, 'onChartClick').and.callThrough();
  component.onChartClick(Event);
  fixture.whenStable().then(() => {
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/grades']);
  });
}));


});
