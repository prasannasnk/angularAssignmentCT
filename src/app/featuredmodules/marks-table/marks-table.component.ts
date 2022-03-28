import { Component, OnInit, ViewChild } from '@angular/core';
import { GradeResultsService } from '../../services/grade-results.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.scss']
})
export class MarksTableComponent implements OnInit {
  data: any[] = [];
  fisVisible: boolean = false;
  sisVisible: boolean = false;
  tisVisible: boolean = false;

  firstGrades: firstGrade[] = studentsMarks.firstGrade;
  secondGrades: secondGrade[] = secondGradeMarks.secondGrade;
  thirdGrades: thirdGrade[] = thirdGradeMarks.thirdGrade;
  firstGradePercentage: number = 0;
  secondGradePercentage: number = 0;
  thirdGradePercentage: number = 0;

  constructor(private gradeResults: GradeResultsService) {


  }
  ngOnInit(): void {
    this.fisVisible = true;
    this.percentageCalculation();
    this.gradeResults.setData(this.data);
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

    this.data = [this.firstGradePercentage, this.secondGradePercentage, this.thirdGradePercentage]
    return this.data
  }


}
