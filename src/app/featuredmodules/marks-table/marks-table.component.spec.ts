import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MarksTableComponent } from './marks-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('MarksTableComponent', () => {
  let component: MarksTableComponent;
  let fixture: ComponentFixture<MarksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksTableComponent ],
      imports: [ RouterTestingModule,FormsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test a method named percentageCalculation', async(() => {
    expect(component.percentageCalculation()).toEqual([82.75,89,89.33333333333331]);
  }));
});
