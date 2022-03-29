import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions} from 'chart.js';
import { SingleDataSet, Label,Color} from 'ng2-charts';
import { Router } from '@angular/router';
import { GradeResultsService } from '../../services/grade-results.service';
import studentsMarks from '../../json/firstGrade.json';
import secondGradeMarks from '../../json/secondGrade.json';
import thirdGradeMarks from '../../json/thirdGrade.json';


export interface Mark {
  English: number;
  Maths: number;
  Socialstudies: number;
}

interface firstGrade {
  studentName: String;
  age: String;
  email: String;
  marks: Mark[];
  percentage: number;

}
interface secondGrade {
  studentName: String;
  age: String;
  email: String;
  marks: Mark[];
  percentage: number;
}
interface thirdGrade {
  studentName: String;
  age: String;
  email: String;
  marks: Mark[];
  percentage: number;
}

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  firstGrades: firstGrade[] = studentsMarks.firstGrade;
  secondGrades: secondGrade[] = secondGradeMarks.secondGrade;
  thirdGrades: thirdGrade[] = thirdGradeMarks.thirdGrade;
  firstGradePercentage: number = 0;
  secondGradePercentage: number = 0;
  thirdGradePercentage: number = 0;
  marks: Mark[] = [];
  marksData: any[] = [this.firstGrades, this.secondGrades, this.thirdGrades];
  onClickGrade : string ="";
  @ViewChild('mychart') mychart: any;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [['First Grade'], ['Second Grade'], ['Third Grade']];
  public pieChartData: SingleDataSet = [82, 83, 75];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  // public pieChartColors: colo
  public colors : Color[] =  [
    {
      backgroundColor: [
        "#ff9900","#77DD77","#97bbcd"
      ]
    }
  ];



  constructor(private router: Router, private gradeResults: GradeResultsService) {

  }

  ngOnInit() {
    this.gradeResults.getData();
    this.percentageCalculation();
    if (this.gradeResults.getData() != undefined) {
      this.pieChartData = this.gradeResults.getData();
    }
  }
  percentageCalculation() {
    for (var i = 0; i < this.firstGrades.length; i++) {
      this.firstGrades[i].percentage;
      for (let k of this.firstGrades[i].marks) {
        this.firstGrades[i].percentage = (k.English + k.Maths + k.Socialstudies) * 100 / 300;
      }
    }
    this.firstGradePercentage = this.firstGrades.map(i => i.percentage).reduce((a, b) => a + b);
    this.firstGradePercentage = this.firstGradePercentage * 100 / 400;

    for (var i = 0; i < this.secondGrades.length; i++) {
      this.secondGrades[i].percentage;
      for (let k of this.secondGrades[i].marks) {
        this.secondGrades[i].percentage = (k.English + k.Maths + k.Socialstudies) * 100 / 300;
      }
    }
    this.secondGradePercentage = this.secondGrades.map(i => i.percentage).reduce((a, b) => a + b);
    this.secondGradePercentage = this.secondGradePercentage * 100 / 400;

    for (var i = 0; i < this.thirdGrades.length; i++) {
      this.thirdGrades[i].percentage;
      for (let k of this.thirdGrades[i].marks) {
        this.thirdGrades[i].percentage = (k.English + k.Maths + k.Socialstudies) * 100 / 300;
      }
    }
    this.thirdGradePercentage = this.thirdGrades.map(i => i.percentage).reduce((a, b) => a + b);
    this.thirdGradePercentage = this.thirdGradePercentage * 100 / 400;

    this.pieChartData = [this.firstGradePercentage, this.secondGradePercentage, this.thirdGradePercentage]
    return this.pieChartData;
  }

  onChartClick = (event: any) => {
    console.log(event.active[0]._view.label)
    this.onClickGrade= event.active[0]._view.label;
    console.log(this.onClickGrade)
    this.gradeResults.setData(this.onClickGrade)
    this.router.navigateByUrl('grades');
  };

}
