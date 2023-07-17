import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleEmployeeDataComponent } from './single-employee-data/single-employee-data.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: ListEmployeesComponent },
  {path: 'employee/:id', component: SingleEmployeeDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
