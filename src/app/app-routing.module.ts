import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PieChartComponent} from './featuredmodules/pie-chart/pie-chart.component';
import {MarksTableComponent} from './featuredmodules/marks-table/marks-table.component';

const routes:  Routes = [
  { path: 'home', component: PieChartComponent },
  { path: 'grades', component: MarksTableComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent };
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


