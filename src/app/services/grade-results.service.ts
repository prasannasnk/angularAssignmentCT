import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import studentsMarks  from '../json/firstGrade.json';


@Injectable({
  providedIn: 'root'
})
export class GradeResultsService {

  constructor() { 
  }
  public data : any;
  
  setData(data:any){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }
}
